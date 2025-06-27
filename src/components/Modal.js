// src/components/Modal.js
import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto p-6 text-center animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="text-gray-600 text-lg">
          {children}
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full w-full transition-transform transform hover:scale-105"
        >
          Got it!
        </button>
      </div>

      {/* Basic animation styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
