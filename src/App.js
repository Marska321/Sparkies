// src/App.js
import React, { useState, useEffect } from 'react';
import { Star, Trophy, Lightbulb, Target, TrendingUp, Users, Award, Lock, CheckCircle, PlayCircle, ArrowLeft, Clock, Tool, ListChecks, LogOut, DollarSign } from 'lucide-react';
import { lessons, badges } from './lessonData.js';
import { useAuth } from './contexts/AuthContext';
import { useModal } from './contexts/ModalContext'; // Import the useModal hook
import { auth, db } from './firebase';
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Modal from './components/Modal'; // Import the Modal component

export default function App() {
  const { currentUser } = useAuth();
  const [authView, setAuthView] = useState('login');
  const { isOpen, title, content, hideModal } = useModal(); // Get modal state and functions

  const AuthGate = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
          <Star className="text-white" size={32} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800">SparkSkill</h1>
          <p className="text-lg text-gray-600">Young Entrepreneur Academy</p>
        </div>
      </div>
      {authView === 'login' ? (
        <Login toggleForm={() => setAuthView('signup')} />
      ) : (
        <SignUp toggleForm={() => setAuthView('login')} />
      )}
    </div>
  );
  
  // The main app now includes the Modal component at the top level
  return (
    <>
      <Modal isOpen={isOpen} title={title} onClose={hideModal}>
        {content}
      </Modal>
      {!currentUser ? <AuthGate /> : <MainApp />}
    </>
  );
}

// Main application component for logged-in users
const MainApp = () => {
  const { currentUser } = useAuth();
  const { showModal } = useModal(); // Get the function to show the modal
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    setLoadingProgress(true);
    const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
      if (doc.exists()) {
        setUserProgress(doc.data());
      } else {
        console.log("No such document for user progress!");
      }
      setLoadingProgress(false);
    });

    return () => unsub();
  }, [currentUser]);

  const handleCompleteLesson = async (lessonId) => {
    if (!userProgress || !currentUser) return;

    if (userProgress.completedLessons.includes(lessonId)) {
        showModal("Already Done!", "You've already completed this lesson and earned your credit.");
        return;
    }

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      const newBadgesCount = userProgress.badges + (badges.some(b => b.lesson === lessonId) ? 1 : 0);
      
      const updatedProgress = {
        ...userProgress,
        completedLessons: [...userProgress.completedLessons, lessonId],
        currentLesson: userProgress.currentLesson + 1,
        badges: newBadgesCount,
      };
      
      await updateDoc(userDocRef, updatedProgress);
      handleBackToDashboard();

    } catch (error) {
      console.error("Error completing lesson: ", error);
      showModal("Save Error", "Failed to save your progress. Please check your connection and try again.");
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
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <p className="text-lg font-semibold">Loading your SparkSkill Journey...</p>
            </div>
        </div>
    );
  }

  // UPDATED: Access control logic now uses showModal instead of alert()
  const handleLessonClick = (lesson) => {
    if (lesson.id === 1) {
        if (lesson.content) setSelectedLesson(lesson);
        return;
    }

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

  const handleBackToDashboard = () => {
    setSelectedLesson(null);
    setCurrentView('dashboard');
  };

  // --- Sub-Components (The code for these is identical to the previous version) ---
  const Navigation = () => { /* ... Same code ... */ };
  const Dashboard = () => { /* ... Same code ... */ };
  const BadgeCollection = () => { /* ... Same code ... */ };
  const Badge = ({ badge }) => { /* ... Same code ... */ };
  const LessonCard = ({ lesson, onClick }) => { /* ... Same code ... */ };
  const LessonDetailView = ({ lesson, onBack }) => { /* ... Same code ... */ };
  
  // You can copy the full component definitions for the above from our previous step.
  // I am omitting them here for brevity, as only the handleLessonClick logic changed.

  const renderContent = () => {
    if (selectedLesson) {
      return <LessonDetailView lesson={selectedLesson} onBack={handleBackToDashboard} />;
    }
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'badges':
        return <BadgeCollection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedLesson && (
          <div className="flex gap-4 mb-8">
            <button onClick={() => setCurrentView('dashboard')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${currentView === 'dashboard' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>Dashboard</button>
            <button onClick={() => setCurrentView('badges')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${currentView === 'badges' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>Badge Collection</button>
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
}
