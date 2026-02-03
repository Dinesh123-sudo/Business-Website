
import React from 'react';
// Import as namespace to bypass potential named export resolution issues
import * as ReactRouterDOM from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { LayoutDashboard, FileText, Mail, Settings, LogOut, Home, Globe } from 'lucide-react';

const { Link, useNavigate, useLocation } = ReactRouterDOM;

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  // Fix: Move useEffect out of conditional to follow Rules of Hooks and use explicit block to avoid returning a Promise result
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const navItems = [
    { name: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Content Editor', path: '/admin/content', icon: FileText },
    { name: 'Blog Manager', path: '/admin/blogs', icon: Globe },
    { name: 'Inquiries', path: '/admin/inquiries', icon: Mail },
    { name: 'SEO & Meta', path: '/admin/seo', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-8 border-b border-slate-800">
          <h2 className="text-xl font-bold font-serif">AdminPanel</h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Sri Meenachi Textiles</p>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${location.pathname === item.path ? 'bg-rose-700 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white mb-2">
            <Home size={18} />
            <span className="text-sm font-medium">View Website</span>
          </Link>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-rose-400 transition-colors"
          >
            <LogOut size={18} />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 overflow-auto max-h-screen">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
