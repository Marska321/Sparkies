// src/App.js
import React, { useState, useEffect } from 'react';
import { Star, Trophy, Lightbulb, Target, TrendingUp, Users, Award, Lock, CheckCircle, PlayCircle, ArrowLeft, Clock, Tool, ListChecks, LogOut } from 'lucide-react';
import { lessons, badges } from './lessonData.js';
import { useAuth } from './contexts/AuthContext';
import { auth, db } from './firebase';
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Login from './components/Login';
import SignUp from './components/SignUp';

export default function App() {
  const { currentUser } = useAuth();
  const [authView, setAuthView] = useState('login');

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

  if (!currentUser) {
    return <AuthGate />;
  }

  return <MainApp />;
}

// Main application component for logged-in users
const MainApp = () => {
  const { currentUser } = useAuth();
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

  // --- UPDATED: FUNCTION TO HANDLE COMPLETING LESSONS AND AWARDING BADGES ---
  const handleCompleteLesson = async (lessonId) => {
    if (!userProgress || !currentUser) return;

    if (userProgress.completedLessons.includes(lessonId)) {
        alert("You've already completed this lesson!");
        return;
    }

    try {
      const userDocRef = doc(db, "users", currentUser.uid);

      // Check if this lesson completion unlocks a new badge
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
      alert("Failed to save your progress. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };
  
  if (loadingProgress || !userProgress) { // Also check for userProgress to avoid errors on first render
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <p className="text-lg font-semibold">Loading your SparkSkill Journey...</p>
            </div>
        </div>
    );
  }

  const handleLessonClick = (lesson) => {
    // Only allow clicking the current lesson or completed lessons
    if (lesson.id === userProgress.currentLesson || userProgress.completedLessons.includes(lesson.id)) {
        if (lesson.content) {
            setSelectedLesson(lesson);
        } else {
            alert("This lesson's content is not yet available.");
        }
    } else {
        alert("Please complete previous lessons to unlock this one!");
    }
  };

  const handleBackToDashboard = () => {
    setSelectedLesson(null);
    setCurrentView('dashboard');
  };

  // --- Sub-Components ---
  const Navigation = () => (
    <div className="bg-white shadow-lg border-b-4 border-blue-400">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full"><Star className="text-white" size={24} /></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">SparkSkill</h1>
              <p className="text-sm text-gray-600">Young Entrepreneur Academy</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-yellow-100 px-3 py-2 rounded-full"><Trophy className="text-yellow-600" size={16} /><span className="font-bold text-yellow-800">{userProgress.badges}</span></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                 {currentUser.displayName?.charAt(0).toUpperCase() || 'S'}
              </div>
              <div>
                <p className="font-bold text-gray-800">{currentUser.displayName || "Spark Star"}</p>
                <p className="text-xs text-gray-600">Level {userProgress.level} Entrepreneur</p>
              </div>
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

  const Dashboard = () => (
    <div className="space-y-8">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div onClick={() => { const current = lessons.find(l => l.id === userProgress.currentLesson); if (current) handleLessonClick(current); }} className="bg-gradient-to-br from-orange-400 to-red-500 p-6 rounded-xl text-white cursor-pointer hover:scale-105 transition-all duration-300">
          <h3 className="font-bold text-lg mb-2">Continue Learning</h3>
          <p className="text-orange-100 text-sm mb-4">{lessons.find(l => l.id === userProgress.currentLesson)?.title || 'All Done!'}</p>
          <div className="flex items-center gap-2"><PlayCircle size={20} /><span>Resume Lesson {userProgress.currentLesson}</span></div>
        </div>
        <div onClick={() => setCurrentView('badges')} className="bg-gradient-to-br from-purple-400 to-blue-500 p-6 rounded-xl text-white cursor-pointer hover:scale-105 transition-all duration-300">
          <h3 className="font-bold text-lg mb-2">View Badges</h3>
          <p className="text-purple-100 text-sm mb-4">{userProgress.badges} earned • {badges.length - userProgress.badges} to unlock</p>
          <div className="flex items-center gap-2"><Trophy size={20} /><span>Check Collection</span></div>
        </div>
        <div className="bg-gradient-to-br from-green-400 to-teal-500 p-6 rounded-xl text-white cursor-pointer hover:scale-105 transition-all duration-300">
          <h3 className="font-bold text-lg mb-2">Track Progress</h3>
          <p className="text-green-100 text-sm mb-4">See your journey</p>
          <div className="flex items-center gap-2"><TrendingUp size={20} /><span>View Stats</span></div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your SparkSkill Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map(lesson => (
            <LessonCard 
              key={lesson.id} 
              lesson={{
                ...lesson,
                completed: userProgress.completedLessons.includes(lesson.id),
                current: lesson.id === userProgress.currentLesson
              }} 
              onClick={() => handleLessonClick(lesson)} 
            />
          ))}
        </div>
      </div>
    </div>
  );

  // --- UPDATED: BadgeCollection Component ---
  const BadgeCollection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Badge Collection 🏆</h2>
        <p className="text-gray-600">Earn badges by completing lessons and mastering entrepreneurship skills!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {badges.map(badge => {
            const isEarned = userProgress.completedLessons.includes(badge.lesson);
            return <Badge key={badge.id} badge={{...badge, earned: isEarned }} />;
        })}
      </div>
    </div>
  );
    
  // --- UPDATED: Badge Component ---
  const Badge = ({ badge }) => (
    <div className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${badge.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-lg' : 'bg-gray-100 border-gray-300'}`}>
      <div className="text-center">
        <div className={`text-4xl mb-3 ${badge.earned ? 'animate-bounce' : 'grayscale opacity-50'}`}>{badge.earned ? badge.icon : '🔒'}</div>
        <h3 className={`font-bold text-lg mb-2 ${badge.earned ? 'text-gray-800' : 'text-gray-500'}`}>{badge.name}</h3>
        <p className={`text-sm ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>{badge.earned ? `Completed Lesson ${badge.lesson}` : `Complete Lesson ${badge.lesson}`}</p>
        {badge.earned && (
          <p className="text-xs text-green-600 font-medium mt-2">
            Earned {new Date().toLocaleDateString()}
          </p>
        )}
      </div>
      {badge.earned && (<div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1"><CheckCircle size={16} /></div>)}
    </div>
  );

  const LessonCard = ({ lesson, onClick }) => (
    <div onClick={onClick} className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${!lesson.completed && !lesson.current ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} ${lesson.completed ? 'bg-gradient-to-br from-green-50 to-blue-50 border-green-300 shadow-lg' : lesson.current ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-400 shadow-lg ring-2 ring-blue-300' : 'bg-white border-gray-300 hover:border-gray-400'}`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full text-2xl ${lesson.color} text-white shadow-lg`}>{lesson.icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-lg text-gray-800">{lesson.title}</h3>
            {lesson.completed && <CheckCircle className="text-green-500" size={20} />}
            {lesson.current && <PlayCircle className="text-blue-500" size={20} />}
            {!lesson.completed && !lesson.current && <Lock className="text-gray-400" size={20} />}
          </div>
          <p className="text-gray-600 text-sm mb-3">{lesson.description}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>{lesson.sections} sections</span><span>•</span><span>{lesson.duration}</span>
          </div>
        </div>
      </div>
      {lesson.completed && (<div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2"><Trophy size={16} /></div>)}
    </div>
  );

  const LessonDetailView = ({ lesson, onBack }) => (
    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
      <div className="flex items-center justify-between mb-8 border-b-2 pb-6 border-gray-100">
        <div className="flex items-center gap-6">
          <div className={`text-4xl p-4 rounded-full text-white ${lesson.color}`}>{lesson.icon}</div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{lesson.title}</h1>
            <p className="text-gray-600 mt-1">{lesson.description}</p>
          </div>
        </div>
        <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all">
          <ArrowLeft size={20} />
          Back
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Lesson Overview</h3>
          <p className="text-gray-700 leading-relaxed">{lesson.content.overview}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Checklist</h3>
          <ul className="space-y-3">
            {lesson.content.checklist.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">{index + 1}</div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Activities</h2>
        <div className="space-y-6">
          {lesson.content.activities.map((activity, index) => (
            <div key={activity.id} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Activity {index + 1}: {activity.title}</h3>
               {/* ... (Activity details are the same) ... */}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t-2 text-center">
        <button 
          onClick={() => handleCompleteLesson(lesson.id)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl disabled:bg-gray-400"
          disabled={userProgress.completedLessons.includes(lesson.id)}
        >
          <div className="flex items-center gap-3">
            {userProgress.completedLessons.includes(lesson.id) ? <CheckCircle size={24}/> : <Trophy size={24}/>}
            <span>{userProgress.completedLessons.includes(lesson.id) ? 'Lesson Complete!' : 'Mark as Complete'}</span>
          </div>
        </button>
      </div>
    </div>
  );

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
