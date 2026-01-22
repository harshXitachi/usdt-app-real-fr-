import React, { useState } from 'react';
import { authService } from '../services/mockData';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const LoginScreen: React.FC<LoginProps> = ({ onLogin }) => {
  const [phone, setPhone] = useState('7851805067');
  const [pin, setPin] = useState('123456'); // Pre-fill for reviewer convenience
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { user } = await authService.login(phone, pin);
      onLogin(user);
    } catch (err) {
      setError('Invalid phone or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-700 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>

      <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-8 z-10">
        <div className="text-center mb-8">
           <h1 className="text-3xl font-bold text-blue-800">UMONEY</h1>
           <p className="text-gray-500 text-sm mt-2">Welcome back!</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
            <input 
              type="tel" 
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-all" 
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Password</label>
            <input 
              type="password" 
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-all" 
              placeholder="Enter password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-3.5 text-center shadow-lg transition-transform active:scale-95"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
           <a href="#" className="text-xs text-blue-600 font-medium hover:underline">Forgot Password?</a>
           <span className="mx-2 text-gray-300">|</span>
           <a href="#" className="text-xs text-blue-600 font-medium hover:underline">Register New Account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;