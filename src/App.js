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
  const { showModal, hideModal } = useModal();
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
        } else {
          setUserProgress(userData);
        }
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

  const handleLogout = async () => { /* ... unchanged ... */ };
  if (loadingProgress || !userProgress) { /* ... unchanged ... */ }
  const handleLessonClick = (lesson) => { /* ... unchanged ... */ };
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
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">{currentUser.displayName?.charAt(0).toUpperCase() || 'S'}</div>
              <div><p className="font-bold text-gray-800">{currentUser.displayName || "Spark Star"}</p><p className="text-xs text-gray-600">Level {userProgress.level} Entrepreneur</p></div>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
  const Dashboard = () => { /* ... unchanged ... */ };
  const BadgeCollection = () => { /* ... unchanged ... */ };
  const Badge = ({ badge }) => { /* ... unchanged ... */ };
  const LessonCard = ({ lesson, onClick }) => { /* ... unchanged ... */ };

  const LessonDetailView = ({ lesson, onBack }) => {
    const [answers, setAnswers] = useState(() => userProgress?.lessonAnswers?.[`lesson${lesson.id}`] || {});
    const handleAnswerChange = (activityId, taskIndex, value) => {
      const key = activity.isReflection ? `reflection${taskIndex}` : `activity${activity.id}_task${taskIndex}`;
      setAnswers(prev => ({ ...prev, [key]: value }));
    };
    const handleSaveProgress = async () => { /* ... unchanged ... */ };

    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
        <div className="flex items-center justify-between mb-8 border-b-2 pb-6 border-gray-100">
          <div className="flex items-center gap-6"><div className={`text-4xl p-4 rounded-full text-white ${lesson.color}`}>{lesson.icon}</div><div><h1 className="text-4xl font-bold text-gray-800">{lesson.title}</h1><p className="text-gray-600 mt-1">{lesson.description}</p></div></div>
          <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"><ArrowLeft size={20} />Back</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"><div className="md:col-span-2"><h3 className="text-2xl font-bold text-gray-800 mb-4">Lesson Overview</h3><p className="text-gray-700 leading-relaxed">{lesson.content.overview}</p></div><div><h3 className="text-2xl font-bold text-gray-800 mb-4">Checklist</h3><ul className="space-y-3">{lesson.content.checklist.map((item, index) => (<li key={index} className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">{index + 1}</div><span className="text-gray-700">{item}</span></li>))}</ul></div></div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Activities</h2>
          <div className="space-y-6">{lesson.content.activities.map((activity, index) => (
            <div key={activity.id} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Activity {index + 1}: {activity.title}</h3>
              <div className="flex items-center gap-8 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-2"><Clock size={16}/> {activity.time}</span>
                <span className="flex items-center gap-2"><Wrench size={16}/> {activity.tools.join(', ')}</span>
              </div>
              <p className="text-gray-700 mb-4">{activity.description}</p>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><ListChecks size={18}/> Tasks:</h4>
                <div className="space-y-4">
                  {activity.writeAnswers?.map((task, i) => {
                    const answerKey = activity.isReflection ? `reflection${i}` : `activity${activity.id}_writeAnswer${i}`;
                    const value = answers[answerKey] || '';
                    const parts = task.split("___");
                    return (
                      <div key={i} className="flex flex-col gap-2 text-gray-700">
                        <label className="font-semibold">{parts[0]}</label>
                        {activity.isReflection ? (
                          <textarea
                            value={value}
                            onChange={(e) => handleAnswerChange(activity.id, i, e.target.value)}
                            className="w-full bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:outline-none p-2 rounded-md h-24"
                            placeholder="Your thoughts here..."
                          />
                        ) : (
                          <input 
                            type="text" value={value}
                            onChange={(e) => handleAnswerChange(activity.id, i, e.target.value)}
                            className="w-full bg-gray-100 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1 rounded-md"
                          />
                        )}
                        <span>{parts[1]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {activity.tip && <p className="text-sm text-purple-600 bg-purple-50 p-3 mt-4 rounded-lg"><strong>Tip:</strong> {activity.tip}</p>}
            </div>
          ))}</div>
        </div>
        <div className="mt-8 pt-6 border-t-2 flex justify-center items-center gap-4">
          <button onClick={handleSaveProgress} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl"><div className="flex items-center gap-3"><Save size={24}/><span>Save Progress</span></div></button>
          <button onClick={() => handleCompleteLesson(lesson.id, answers)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl disabled:bg-gray-400" disabled={userProgress.completedLessons.includes(lesson.id)}><div className="flex items-center gap-3">{userProgress.completedLessons.includes(lesson.id) ? <CheckCircle size={24}/> : <Trophy size={24}/>}<span>{userProgress.completedLessons.includes(lesson.id) ? 'Lesson Complete!' : 'Mark as Complete'}</span></div></button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (selectedLesson) {
      return <LessonDetailView lesson={selectedLesson} onBack={handleBackToDashboard} />;
    }
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'badges': return <BadgeCollection />;
      case 'admin': return userProgress.isAdmin ? <AdminDashboard /> : <Dashboard />;
      case 'progress': return <ProgressView userProgress={userProgress} lessons={lessons} />;
      case 'sparkfolio': return <SparkFolio userProgress={userProgress} />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedLesson && (
          <div className="flex flex-wrap gap-4 mb-8">
            <button onClick={() => setCurrentView('dashboard')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${currentView === 'dashboard' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>Dashboard</button>
            <button onClick={() => setCurrentView('badges')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${currentView === 'badges' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>Badge Collection</button>
            <button onClick={() => setCurrentView('progress')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${currentView === 'progress' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>Track Progress</button>
            <button onClick={() => setCurrentView('sparkfolio')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${currentView === 'sparkfolio' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>My SparkFolio</button>
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
};
