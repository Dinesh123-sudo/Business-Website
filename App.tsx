
import React from 'react';
// Import as namespace to bypass potential named export resolution issues
import * as ReactRouterDOM from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Destination from './pages/Destination';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Admin Pages
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import ContentEditor from './pages/Admin/ContentEditor';

const { HashRouter, Routes, Route } = ReactRouterDOM;

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/destinations" element={<Layout><Destination /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin/content" element={<AdminLayout><ContentEditor /></AdminLayout>} />
          <Route path="/admin/blogs" element={<AdminLayout><div className="bg-white p-10 rounded-[40px] shadow-sm"><h1 className="text-3xl font-bold">Blog Management</h1><p className="mt-4 text-slate-500">Add, edit, and remove fashion articles from your blog page.</p></div></AdminLayout>} />
          <Route path="/admin/inquiries" element={<AdminLayout><div className="bg-white p-10 rounded-[40px] shadow-sm"><h1 className="text-3xl font-bold">Client Inquiries</h1><p className="mt-4 text-slate-500">Manage messages from prospective global partners.</p></div></AdminLayout>} />
          <Route path="/admin/seo" element={<AdminLayout><div className="bg-white p-10 rounded-[40px] shadow-sm"><h1 className="text-3xl font-bold">SEO & Meta Management</h1><p className="mt-4 text-slate-500">Configure page titles, meta descriptions, and analytics tracking.</p></div></AdminLayout>} />
          
          {/* Catch-all 404 */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
