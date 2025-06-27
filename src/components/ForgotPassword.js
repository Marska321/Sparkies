// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useModal } from '../contexts/ModalContext'; // Use our custom modal

export default function ForgotPassword({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { showModal } = useModal();

  const handleReset = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      showModal(
        "Check Your Email",
        `A password reset link has been sent to ${email} if an account exists with that address.`
      );
    } catch (err) {
      // We show a generic message for security reasons
      // instead of confirming if an email exists or not.
      setError('Failed to send reset email. Please try again.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleReset} className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Reset Password</h2>
        <p className="text-center text-gray-600 mb-6">Enter your email address and we will send you a link to reset your password.</p>
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
        <div className="flex items-center justify-between">
          <button
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full disabled:bg-gray-400 transition-colors duration-300"
            type="submit"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </div>
      </form>
      <p className="text-center text-gray-600 text-sm">
        Remembered your password?{' '}
        <button onClick={() => toggleForm('login')} className="font-bold text-blue-500 hover:text-blue-800 focus:outline-none">
          Back to Log In
        </button>
      </p>
    </div>
  );
}
