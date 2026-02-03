
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Banner - Added bg-slate-900 as fallback */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" 
          alt="Textiles banner" 
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-xl mx-auto">Comprehensive textile solutions for the modern global fashion industry.</p>
        </div>
      </section>

      {/* Grid of services */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => {
            const Icon = (Icons as any)[service.icon] || Icons.HelpCircle;
            return (
              <div key={idx} className="group p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-rose-200 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-white text-rose-700 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-rose-700 group-hover:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3">
                  {['Bulk custom manufacturing', 'Global door-to-door shipping', 'Quality assurance reports'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 size={16} className="text-rose-600" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-rose-50 border-y border-rose-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a custom textile solution?</h2>
          <p className="text-lg text-slate-600 mb-10">We specialize in catering to specific brand requirements, from unique prints to sustainable fabric blends.</p>
          <button className="bg-rose-700 text-white px-10 py-4 rounded-full font-bold hover:bg-rose-800 transition-all flex items-center gap-2 mx-auto">
            Get a Free Quote <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
