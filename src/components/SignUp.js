// src/components/SignUp.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from '../firebase';

export default function SignUp({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!nickname) {
      setError("Please choose a nickname!");
      return;
    }
    setError('');
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: nickname
      });

      // --- UPDATED: Also save nickname and email to Firestore ---
      const initialProgress = {
        displayName: nickname, // Add nickname
        email: email,           // Add email
        level: 1,
        badges: 0,
        streak: 0,
        ideasCreated: 0,
        completedLessons: [],
        currentLesson: 1,
        isPaid: false
      };
      // The path is "users", user.uid, so we are setting a document with the user's ID
      await setDoc(doc(db, "users", user.uid), initialProgress);

    } catch (err) {
      setError('Failed to create an account. Please check your email and password.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSignUp} className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nickname">
            Nickname
          </label>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Sparky"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="••••••••••"
            required
          />
           <p className="text-xs text-gray-600">Password should be at least 6 characters.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full disabled:bg-gray-400 transition-colors duration-300"
            type="submit"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
      </form>
      <p className="text-center text-gray-600 text-sm">
        Already have an account?{' '}
        <button onClick={() => toggleForm('login')} className="font-bold text-blue-500 hover:text-blue-800 focus:outline-none">
          Log In
        </button>
      </p>
    </div>
  );
}
