// src/AVTestApp.jsx
import React from 'react';
import Questions from './Questions';

function AVTestApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🎧 AV Technician Skills Test</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Welcome! Complete the tasks to prove your skills in real-world AV setups.
        </p>
      </header>

      <Questions />
    </div>
  );
}

export default AVTestApp;