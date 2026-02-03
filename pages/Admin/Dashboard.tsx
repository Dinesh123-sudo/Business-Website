
import React from 'react';
import { useApp } from '../../context/AppContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MessageSquare, Users, Eye, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { inquiries, posts } = useApp();

  const data = [
    { name: 'Jan', visits: 400 },
    { name: 'Feb', visits: 700 },
    { name: 'Mar', visits: 600 },
    { name: 'Apr', visits: 1100 },
    { name: 'May', visits: 1400 },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-800">Welcome Back, Administrator</h1>
        <p className="text-slate-500">Here's what's happening with WorldClass today.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Inquiries', value: inquiries.length, icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Blog Posts', value: posts.length, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Page Views', value: '1,284', icon: Eye, color: 'text-rose-600', bg: 'bg-rose-50' },
          { label: 'Engagement', value: '+12%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
              <stat.icon size={24} />
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h4 className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</h4>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 mb-10">
        <h3 className="text-xl font-bold mb-8">Website Traffic (Last 5 Months)</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9d174d" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#9d174d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="visits" stroke="#9d174d" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Recent Inquiries */}
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-6">Recent Inquiries</h3>
          <div className="space-y-4">
            {inquiries.slice(0, 5).length > 0 ? inquiries.slice(0, 5).map(inq => (
              <div key={inq.id} className="p-4 bg-slate-50 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">{inq.name}</p>
                  <p className="text-xs text-slate-500">{inq.subject}</p>
                </div>
                <span className="text-[10px] font-bold uppercase text-rose-600 bg-rose-50 px-2 py-1 rounded">New</span>
              </div>
            )) : (
              <p className="text-slate-400 text-sm py-8 text-center">No recent inquiries found.</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors text-left border border-slate-100">
              <p className="font-bold mb-1">New Post</p>
              <p className="text-xs text-slate-500">Draft a blog article</p>
            </button>
            <button className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors text-left border border-slate-100">
              <p className="font-bold mb-1">Upload Assets</p>
              <p className="text-xs text-slate-500">Manage images</p>
            </button>
            <button className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors text-left border border-slate-100">
              <p className="font-bold mb-1">Edit SEO</p>
              <p className="text-xs text-slate-500">Update meta tags</p>
            </button>
            <button className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors text-left border border-slate-100">
              <p className="font-bold mb-1">Change Theme</p>
              <p className="text-xs text-slate-500">Fonts & Colors</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
