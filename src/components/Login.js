// src/components/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // The onAuthStateChanged listener in AuthContext will handle the successful login
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
        {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">{error}</p>}
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
          <div className="flex justify-between items-center mb-2">
            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
              Password
            </label>
            {/* --- NEW: Forgot Password Link --- */}
            <button
              type="button"
              onClick={() => toggleForm('forgotPassword')}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </button>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="••••••••••"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={loading}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full disabled:bg-gray-400 transition-colors duration-300"
            type="submit"
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </div>
      </form>
      <p className="text-center text-gray-600 text-sm">
        Don't have an account?{' '}
        <button onClick={() => toggleForm('signup')} className="font-bold text-blue-500 hover:text-blue-800 focus:outline-none">
          Sign Up
        </button>
      </p>
    </div>
  );
}
