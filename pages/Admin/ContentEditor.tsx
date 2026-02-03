
import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Save, CheckCircle } from 'lucide-react';

const ContentEditor: React.FC = () => {
  const { content, updateContent } = useApp();
  const [localContent, setLocalContent] = useState(content);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateContent(localContent);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Content Editor</h1>
          <p className="text-slate-500">Modify global text across your website.</p>
        </div>
        <button 
          onClick={handleSave}
          className="bg-rose-700 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-rose-800 transition-all shadow-lg shadow-rose-100"
        >
          {saved ? <CheckCircle size={20} /> : <Save size={20} />}
          {saved ? 'Changes Saved' : 'Save All Changes'}
        </button>
      </div>

      <div className="space-y-10 pb-20">
        {/* Home Page Section */}
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-8 border-b border-slate-100 pb-4">Homepage Hero</h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Hero Title</label>
              <input 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={localContent.home.heroTitle}
                onChange={e => setLocalContent({...localContent, home: {...localContent.home, heroTitle: e.target.value}})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Hero Subtitle</label>
              <textarea 
                rows={3}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                value={localContent.home.heroSubtitle}
                onChange={e => setLocalContent({...localContent, home: {...localContent.home, heroSubtitle: e.target.value}})}
              />
            </div>
          </div>
        </div>

        {/* About Page Section */}
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-8 border-b border-slate-100 pb-4">About Us Section</h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Company Story</label>
              <textarea 
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                value={localContent.about.story}
                onChange={e => setLocalContent({...localContent, about: {...localContent.about, story: e.target.value}})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Mission Statement</label>
                <textarea 
                  rows={3}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                  value={localContent.about.mission}
                  onChange={e => setLocalContent({...localContent, about: {...localContent.about, mission: e.target.value}})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Vision Statement</label>
                <textarea 
                  rows={3}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                  value={localContent.about.vision}
                  onChange={e => setLocalContent({...localContent, about: {...localContent.about, vision: e.target.value}})}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-8 border-b border-slate-100 pb-4">Official Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Business Email</label>
              <input 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={localContent.contact.email}
                onChange={e => setLocalContent({...localContent, contact: {...localContent.contact, email: e.target.value}})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Address</label>
              <input 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={localContent.contact.address}
                onChange={e => setLocalContent({...localContent, contact: {...localContent.contact, address: e.target.value}})}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
