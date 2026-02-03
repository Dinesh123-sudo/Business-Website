
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const { Link } = ReactRouterDOM;

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-white">
      <div className="max-w-md w-full text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-rose-700 mb-6 block">Error 404</span>
        <h1 className="text-6xl font-serif font-bold text-slate-900 mb-6">Page Not Found</h1>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The collection or page you are looking for has been moved or archived. 
          Return to our home gallery to continue exploring our premium textiles.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-700 transition-all shadow-xl shadow-slate-200"
        >
          <ArrowLeft size={18} /> Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
