
import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Star, Globe, ShieldCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
// Import as namespace to bypass potential named export resolution issues
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

const CollectionCard: React.FC<{ item: any; idx: number }> = ({ item, idx }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [activeImg, setActiveImg] = useState(item.img);

  useEffect(() => {
    setActiveImg(item.img);
  }, [item.img]);

  return (
    <div className="flex flex-col gap-4 group">
      {/* Main Card */}
      <div className="relative overflow-hidden rounded-[32px] cursor-pointer bg-slate-100 aspect-[3/4] shadow-md border border-slate-100 transition-all hover:shadow-2xl">
        {/* Loading State */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-8 h-8 border-2 border-rose-700/20 border-t-rose-700 rounded-full animate-spin mb-4"></div>
            <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">Authenticating...</span>
          </div>
        )}

        {/* Error Fallback */}
        {error && (
          <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-8 text-center">
            <div className="text-slate-300">
               <span className="text-[10px] font-bold uppercase tracking-widest block mb-1">Sri Meenachi</span>
               <span className="text-[10px] italic">Premium Textile {idx + 1}</span>
            </div>
          </div>
        )}
        
        <img 
          key={activeImg}
          src={activeImg} 
          alt={item.title} 
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <span className="inline-block px-3 py-1 bg-rose-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 shadow-lg">
            Limited Series
          </span>
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight font-serif">{item.title}</h3>
          <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-sans">
            {item.subtitle}
          </p>
          <div className="mt-6 flex items-center gap-2 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-100 uppercase tracking-widest">
            Examine Details <ArrowRight size={14} />
          </div>
        </div>
      </div>

      {/* Swatch Gallery */}
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">Related Patterns</span>
          <div className="flex gap-1">
             <button className="p-1 hover:text-rose-700 text-slate-300 transition-colors"><ChevronLeft size={12}/></button>
             <button className="p-1 hover:text-rose-700 text-slate-300 transition-colors"><ChevronRight size={12}/></button>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {[item.img, ...item.swatches].map((swatch: string, sIdx: number) => (
            <button
              key={sIdx}
              onClick={() => setActiveImg(swatch)}
              className={`w-14 h-14 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${activeImg === swatch ? 'border-rose-700 scale-105 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'}`}
            >
              <img src={swatch} className="w-full h-full object-cover" alt={`swatch-${sIdx}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { content } = useApp();
  const [heroLoaded, setHeroLoaded] = useState(false);

  const collections = [
    { 
      title: "Indigo Artisan Print", 
      subtitle: "Sophisticated grey & blue patterned motifs on premium silk",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
      swatches: [
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1590736912185-937299787bc3?auto=format&fit=crop&q=80&w=300"
      ]
    },
    { 
      title: "Royal Magenta Heritage", 
      subtitle: "Traditional pink silk with exquisite gold border work",
      img: "https://images.unsplash.com/photo-1610030469668-93510cb663d1?auto=format&fit=crop&q=80&w=800",
      swatches: [
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1558271821-65adc93294e4?auto=format&fit=crop&q=80&w=300"
      ]
    },
    { 
      title: "Emerald Floral Saree", 
      subtitle: "Vibrant green textures with rich contrasting patterns",
      img: "https://images.unsplash.com/photo-1610189012906-400995171960?auto=format&fit=crop&q=80&w=800",
      swatches: [
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1594913366159-1832ff18a721?auto=format&fit=crop&q=80&w=300",
        "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80&w=300"
      ]
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Dynamically sized to viewport minus header */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[500px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&q=80&w=2000"
            className={`w-full h-full object-cover brightness-[0.45] transition-opacity duration-1000 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
            alt="Premium Silk Textile"
            onLoad={() => setHeroLoaded(true)}
          />
          {/* Subtle animated overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-rose-700/30 backdrop-blur-md border border-rose-500/30 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] mb-8 animate-slide-in-top">
              Global Textile Excellence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] font-serif animate-slide-in-top [animation-delay:200ms]">
              {content.home.heroTitle}
            </h1>
            <p className="text-lg md:text-xl mb-12 text-slate-200 font-light leading-relaxed max-w-2xl animate-slide-in-top [animation-delay:400ms]">
              {content.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 animate-slide-in-top [animation-delay:600ms]">
              <Link
                to="/services"
                className="bg-rose-700 hover:bg-rose-600 px-10 py-5 rounded-full font-bold text-center transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-rose-900/20"
              >
                {content.home.ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-10 py-5 rounded-full font-bold text-center transition-all"
              >
                Our Legacy
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-2 group text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-700 transition-all">
                <Globe size={22} />
              </div>
              <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-500">Global Export</span>
            </div>
            <div className="flex flex-col items-center gap-2 group text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-700 transition-all">
                <ShieldCheck size={22} />
              </div>
              <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-500">ISO Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2 group text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-700 transition-all">
                <Zap size={22} />
              </div>
              <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-500">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-2 group text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-700 transition-all">
                <Star size={22} />
              </div>
              <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-500">Premium Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Collections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
            <div className="text-center md:text-left">
              <span className="text-rose-700 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">New Series 2024</span>
              <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight">Current Collections</h2>
              <p className="text-slate-500 mt-4 max-w-lg">Curated textiles specifically for international markets, balancing tradition and trend.</p>
            </div>
            <Link to="/services" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
              Explore Catalog <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {collections.map((item, idx) => (
              <CollectionCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="bg-slate-900 py-28 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-700/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-rose-500 font-serif">25+</div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-rose-500 font-serif">1k+</div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Master Designs</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-rose-500 font-serif">15+</div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Global Markets</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-rose-500 font-serif">500+</div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Direct Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-rose-700 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">International Praise</span>
             <h2 className="text-4xl font-bold font-serif">Trusted by Global Brands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Elena Rossi", role: "Milan, Italy", quote: "The quality of silk from Sri Meenachi Textiles is unparalleled. They are our go-to for premium Indian fabrics." },
              { name: "David Chen", role: "NY, USA", quote: "Reliable logistics and exceptional customer service. T. Sudhakar personally ensures every bulk order meets specs." },
              { name: "Priya Sharma", role: "Singapore", quote: "Their contemporary takes on traditional sarees have been a hit with our international clientele." },
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="text-rose-600 mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-8 text-lg leading-relaxed font-light">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-50 text-rose-700 rounded-full flex items-center justify-center font-bold group-hover:bg-rose-700 group-hover:text-white transition-colors duration-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{t.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
