// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

// This is the functional Admin Dashboard component.
export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all users from Firestore when the component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollectionRef = collection(db, "users");
        const data = await getDocs(usersCollectionRef);
        const usersList = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersList);
      } catch (err) {
        setError('Failed to load users. Please check your Firestore security rules.');
        console.error(err);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Function to grant a user premium access
  const grantPremiumAccess = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        isPaid: true
      });
      // Update the local state to reflect the change immediately
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isPaid: true } : user
      ));
    } catch (err) {
      setError(`Failed to update user ${userId}.`);
      console.error(err);
    }
  };

  if (loading) {
    return <div className="text-center p-8">Loading users...</div>;
  }

  if (error) {
    return <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>;
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Manage your SparkSkill users and grant premium access.</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-sm">Nickname</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">User ID</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{user.displayName || '(No Nickname)'}</td>
                <td className="py-3 px-4 text-xs text-gray-500">{user.id}</td>
                <td className="py-3 px-4">
                  {user.isPaid ? (
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-full">Premium</span>
                  ) : (
                    <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">Free</span>
                  )}
                </td>
                <td className="py-3 px-4">
                  {!user.isPaid && (
                    <button
                      onClick={() => grantPremiumAccess(user.id)}
                      className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-1 px-3 rounded-full transition-colors"
                    >
                      Grant Access
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
