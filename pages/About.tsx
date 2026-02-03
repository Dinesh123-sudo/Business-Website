
import React from 'react';
import { useApp } from '../context/AppContext';
// Added missing Globe import
import { Target, Eye, Users, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { content } = useApp();

  return (
    <div className="bg-white animate-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <section className="bg-slate-900 py-32 text-white relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Our Legacy</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Bridging traditional Indian craftsmanship with global fashion needs.</p>
        </div>
      </section>

      {/* Founders & Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-rose-700 font-bold uppercase tracking-widest text-sm">Founded in Barugur, India</span>
              <h2 className="text-4xl font-bold">The Sri Meenachi Journey</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content.about.story}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-rose-700">
                  <h4 className="font-bold text-xl mb-1">T. Sudhakar</h4>
                  <p className="text-slate-500 text-sm">Managing Founder</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-rose-700">
                  <h4 className="font-bold text-xl mb-1">T. Karthick</h4>
                  <p className="text-slate-500 text-sm">Strategy & Partnerships</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542372147193-a7aca54189cd?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl shadow-2xl" 
                alt="Founder Meeting" 
              />
              <div className="absolute -bottom-8 -left-8 bg-rose-700 p-8 rounded-2xl text-white hidden md:block">
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <Target className="text-rose-500 mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {content.about.mission}
              </p>
            </div>
            <div className="p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <Eye className="text-rose-500 mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {content.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Why Global Partners Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold">Unmatched Quality</h4>
              <p className="text-slate-500">Every yard of fabric undergoes rigorous quality control checks before shipment.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold">Ethical Sourcing</h4>
              <p className="text-slate-500">We maintain direct relationships with weaving communities, ensuring fair practices.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} />
              </div>
              <h4 className="text-xl font-bold">Seamless Logistics</h4>
              <p className="text-slate-500">Expert handling of international trade documentations and global shipping routes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
