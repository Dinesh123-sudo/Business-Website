
import React from 'react';
import { DESTINATIONS } from '../constants';
import { Plane, Ship, Truck, Globe2 } from 'lucide-react';

const Destination: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6">Global Reach, Local Presence.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Sri Meenachi Textiles operates a robust international distribution network. 
              Our strategically located hub in Barugur, Tamil Nadu, allows us to serve clients across four continents with speed and precision.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="p-8 bg-white rounded-3xl shadow-sm text-center">
               <Globe2 className="mx-auto mb-4 text-rose-700" size={40} />
               <h3 className="font-bold text-lg">15+ Countries</h3>
             </div>
             <div className="p-8 bg-white rounded-3xl shadow-sm text-center">
               <Plane className="mx-auto mb-4 text-rose-700" size={40} />
               <h3 className="font-bold text-lg">Air Freight</h3>
             </div>
             <div className="p-8 bg-white rounded-3xl shadow-sm text-center">
               <Ship className="mx-auto mb-4 text-rose-700" size={40} />
               <h3 className="font-bold text-lg">Ocean Freight</h3>
             </div>
             <div className="p-8 bg-white rounded-3xl shadow-sm text-center">
               <Truck className="mx-auto mb-4 text-rose-700" size={40} />
               <h3 className="font-bold text-lg">Road Logistics</h3>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden">
          <div className="p-12 border-b border-slate-100">
            <h2 className="text-3xl font-bold">Our Global Markets</h2>
            <p className="text-slate-500 mt-2">Currently serving and expanding in the following regions.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-400 uppercase text-xs tracking-widest font-bold">
                <tr>
                  <th className="px-12 py-6">Region</th>
                  <th className="px-12 py-6">Key Markets</th>
                  <th className="px-12 py-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {DESTINATIONS.map((dest, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-12 py-8 font-bold text-slate-800">{dest.region}</td>
                    <td className="px-12 py-8 text-slate-600">{dest.markets.join(', ')}</td>
                    <td className="px-12 py-8">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold ${dest.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {dest.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
