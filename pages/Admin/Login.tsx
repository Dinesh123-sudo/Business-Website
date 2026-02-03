
import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
// Import as namespace to bypass potential named export resolution issues
import * as ReactRouterDOM from 'react-router-dom';
import { Lock, User } from 'lucide-react';

const { useNavigate } = ReactRouterDOM;

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 lg:p-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Admin Access</h1>
          <p className="text-slate-500">Manage Sri Meenachi Textiles CMS</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <User size={14} /> Username
            </label>
            <input 
              disabled
              value="admin"
              className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none text-slate-400 cursor-not-allowed"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <Lock size={14} /> Password
            </label>
            <input 
              type="password"
              placeholder="••••••••"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-rose-600 text-sm font-medium">{error}</p>}

          <button 
            type="submit"
            className="w-full bg-rose-700 text-white py-5 rounded-2xl font-bold hover:bg-rose-800 transition-colors shadow-xl shadow-rose-100"
          >
            Authenticate
          </button>
        </form>
        
        <p className="mt-8 text-center text-xs text-slate-400">
          Default password: <code className="bg-slate-100 px-1 rounded">admin123</code>
        </p>
      </div>
    </div>
  );
};

export default Login;
