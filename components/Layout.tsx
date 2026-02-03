
import React, { useState } from 'react';
// Import as namespace to bypass potential named export resolution issues
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const { Link, useLocation } = ReactRouterDOM;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { content, theme } = useApp();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> {content.contact.phones[0]}</span>
          <span className="flex items-center gap-1 hidden md:flex"><Mail size={12} /> {content.contact.email}</span>
        </div>
        <div className="flex gap-3">
          <Link to="/admin/login" className="hover:text-rose-400">Admin</Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tight text-slate-800">WorldClass</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-rose-700 font-bold -mt-1">Sri Meenachi Textiles</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-rose-700 ${location.pathname === link.path ? 'text-rose-700' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">WorldClass</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Premium international textiles agency specializing in women's high-fashion fabrics, sarees, and dress materials.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-rose-700 transition-colors"><Instagram size={18} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-rose-700 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-rose-700 transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-rose-500">Quick Links</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {navLinks.map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-rose-500">Contact Us</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>{content.contact.address}</li>
                <li>{content.contact.phones.join(', ')}</li>
                <li>{content.contact.email}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-rose-500">Newsletter</h4>
              <p className="text-slate-400 text-xs mb-4">Subscribe to receive updates on new collections and fashion trends.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-none rounded-l-md px-4 py-2 text-sm w-full focus:ring-1 focus:ring-rose-500"
                />
                <button className="bg-rose-700 px-4 py-2 rounded-r-md hover:bg-rose-600 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} Sri Meenachi Textiles. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
