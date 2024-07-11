import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">Home Page</h1>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Welcome Home!</h2>
          <p className="text-gray-700">This is your home page. Here you can manage your content and settings.</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
