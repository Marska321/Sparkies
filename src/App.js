// src/App.js
import React, { useState, useEffect } from 'react';
import { Star, Trophy, Lightbulb, Target, TrendingUp, Users, Award, Lock, CheckCircle, PlayCircle, ArrowLeft, Clock, Wrench, ListChecks, LogOut, DollarSign, Shield, Save, BookOpen, Send, Rocket } from 'lucide-react';
import { lessons, badges } from './lessonData.js';
import { useAuth } from './contexts/AuthContext';
import { useModal } from './contexts/ModalContext';
import { auth, db } from './firebase';
import { doc, onSnapshot, updateDoc, setDoc, serverTimestamp } from "firebase/firestore";
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Modal from './components/Modal';
import AdminDashboard from './components/AdminDashboard';
import ProgressView from './components/ProgressView';
import SparkFolio from './components/SparkFolio';

const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

export default function App() {
  const { currentUser } = useAuth();
  const [authView, setAuthView] = useState('login');
  const { isOpen, title, content, hideModal } = useModal();

  const AuthGate = () => {
    let viewComponent;
    switch(authView) {
      case 'signup': viewComponent = <SignUp toggleForm={setAuthView} />; break;
      case 'forgotPassword': viewComponent = <ForgotPassword toggleForm={setAuthView} />; break;
      default: viewComponent = <Login toggleForm={setAuthView} />;
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full"><Star className="text-white" size={32} /></div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">SparkSkill</h1>
            <p className="text-lg text-gray-600">Young Entrepreneur Academy</p>
          </div>
        </div>
        {viewComponent}
      </div>
    );
  };
  
  return (
    <>
      <Modal isOpen={isOpen} title={title} onClose={hideModal}>{content}</Modal>
      {!currentUser ? <AuthGate /> : <MainApp />}
    </>
  );
}

const MainApp = () => {
  const { currentUser } = useAuth();
  const { showModal } = useModal();
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(true);

  useEffect(() => {
    if (!currentUser) return;
    setLoadingProgress(true);
    const userDocRef = doc(db, "users", currentUser.uid);
    const unsub = onSnapshot(userDocRef, async (doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        const today = new Date();
        const lastLogin = userData.lastLogin?.toDate();
        if (!isSameDay(lastLogin, today)) {
          const yesterday = new Date();
          yesterday.setDate(today.getDate() - 1);
          const newStreak = isSameDay(lastLogin, yesterday) ? (userData.streak || 0) + 1 : 1;
          await updateDoc(userDocRef, { streak: newStreak, lastLogin: serverTimestamp() });
        }
        setUserProgress(userData);
      } else {
        const initialProgress = {
          displayName: currentUser.displayName || "New User", email: currentUser.email,
          level: 1, badges: 0, streak: 1, ideasCreated: 0,
          completedLessons: [], currentLesson: 1, isPaid: false, lessonAnswers: {},
          lastLogin: serverTimestamp()
        };
        await setDoc(userDocRef, initialProgress);
      }
      setLoadingProgress(false);
    });
    return () => unsub();
  }, [currentUser]);

  const UpgradeModalContent = () => (
    <div className="text-center">
        <Rocket size={48} className="mx-auto text-green-500 mb-4" />
        <p className="text-lg text-gray-700">
            You've completed the first lesson and you're on your way to becoming a SparkStar!
        </p>
        <p className="mt-4 font-bold text-xl text-blue-600">
            Ready to unlock all 12 lessons and your full potential?
        </p>
        <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg">
            <p>Please ask a parent to contact us to upgrade to a Premium account and continue your journey!</p>
        </div>
    </div>
  );

  const handleCompleteLesson = async (lessonId, answers) => {
    if (!userProgress || !currentUser) return;
    if (userProgress.completedLessons.includes(lessonId)) {
      showModal("Already Done!", "You've already completed this lesson.");
      return;
    }
    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      const newBadgesCount = userProgress.badges + (badges.some(b => b.lesson === lessonId) ? 1 : 0);
      const newCompletedLessons = [...userProgress.completedLessons, lessonId];
      const newLevel = Math.floor(newCompletedLessons.length / 3) + 1;
      const updatedProgress = { 
        ...userProgress, 
        completedLessons: newCompletedLessons, 
        currentLesson: userProgress.currentLesson + 1, 
        badges: newBadgesCount,
        level: newLevel,
        lessonAnswers: { ...userProgress.lessonAnswers, [`lesson${lessonId}`]: answers }
      };
      await updateDoc(userDocRef, updatedProgress);
      handleBackToDashboard();
      
      if (lessonId === 1 && !userProgress.isPaid) {
        showModal("Congratulations!", <UpgradeModalContent />);
      } else {
        showModal("Lesson Complete!", "Great job! Your progress has been saved.");
      }
    } catch (error) {
      console.error("Error completing lesson: ", error);
      showModal("Save Error", "Failed to save your progress. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };
  
  if (loadingProgress || !userProgress) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100"><p className="text-lg font-semibold">Loading your SparkSkill Journey...</p></div>;
  }

  const handleLessonClick = (lesson) => {
    if (lesson.id > 1 && !userProgress.isPaid) {
        showModal("Premium Content", "This lesson is for paid members! Please contact us to upgrade and unlock the full course.");
        return;
    }
    const isLockedByProgression = lesson.id !== userProgress.currentLesson && !userProgress.completedLessons.includes(lesson.id);
    if (isLockedByProgression) {
        showModal("Lesson Locked", "Please complete previous lessons to unlock this one!");
        return;
    }
    if (lesson.content) setSelectedLesson(lesson);
  };

  const handleBackToDashboard = () => setSelectedLesson(null);

  const Navigation = () => (
    <div className="bg-white shadow-lg border-b-4 border-blue-400">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full"><Star className="text-white" size={24} /></div>
            <div><h1 className="text-2xl font-bold text-gray-800">SparkSkill</h1><p className="text-sm text-gray-600">Young Entrepreneur Academy</p></div>
          </div>
          <div className="flex items-center gap-6">
            {userProgress.isPaid && <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold"><Award size={16}/><span>Premium</span></div>}
            {userProgress.isAdmin && <button onClick={() => setCurrentView('admin')} className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold"><Shield size={16}/><span>Admin</span></button>}
            <div className="flex items-center gap-2 bg-yellow-100 px-3 py-2 rounded-full"><Trophy className="text-yellow-600" size={16} /><span className="font-bold text-yellow-800">{userProgress.badges}</span></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-1
