
import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { posts } = useApp();

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Fashion Insights</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Latest trends, industry news, and textile innovation from our expert team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-rose-700 shadow-sm">
                  Trending
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-rose-700 transition-colors line-clamp-2">{post.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto">
                  <button className="text-rose-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
