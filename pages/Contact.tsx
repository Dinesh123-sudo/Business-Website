
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { content, addInquiry } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry(form);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-5xl font-bold mb-8">Get In Touch</h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              We welcome international inquiries for bulk textiles, custom manufacturing, and global partnerships. Our team typically responds within 12 business hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-slate-600 leading-relaxed">{content.contact.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Numbers</h4>
                  <p className="text-slate-600">{content.contact.phones.join(' / ')}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Address</h4>
                  <p className="text-slate-600">{content.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Mock Map Integration */}
            <div className="mt-12 rounded-3xl overflow-hidden h-64 bg-slate-100 border border-slate-200 flex items-center justify-center relative group grayscale hover:grayscale-0 transition-all">
                <img src="https://picsum.photos/800/400?blur=1" className="absolute inset-0 w-full h-full object-cover" alt="Map Placeholder" />
                <div className="relative z-10 text-center">
                    <MapPin className="text-rose-700 mx-auto mb-2" size={32} />
                    <span className="font-bold text-slate-800">Krishnagiri, Tamil Nadu</span>
                </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 lg:p-16 rounded-[40px] border border-slate-100 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. We'll be in touch very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Wholesale Inquiry"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="How can we help your business?"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                >
                  Send Inquiry <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
