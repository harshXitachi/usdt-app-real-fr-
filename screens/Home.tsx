import React, { useState } from 'react';
import { IconHeadset, IconBell } from '../components/Icons';

const HomeScreen: React.FC<{ onSupportClick: () => void }> = ({ onSupportClick }) => {
  const [withdrawEnabled, setWithdrawEnabled] = useState(false);

  // Hardcoded data matching screenshot
  const bonusSlabs = [
    { range: '≈ 50.5 - 100.9 U', bonus: '₹100' },
    { range: '≈ 101.0 - 151.4 U', bonus: '₹150' },
    { range: '≈ 151.5 - 201.9 U', bonus: '₹200' },
    { range: '≈ 202.0 U or more', bonus: '₹250' },
  ];

  const milestones = [100, 200, 300, 400, 500, 600, 700];

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="w-6"></div>
        <h1 className="text-blue-700 text-lg font-bold tracking-wide">UMONEY</h1>
        <button onClick={onSupportClick} className="text-blue-900">
          <IconHeadset className="w-6 h-6" />
        </button>
      </div>

      <div className="px-4 space-y-4">
        {/* Banner */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mt-2">
          {/* Background Image Simulation */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900">
             {/* Decorative particles */}
             <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-blue-400 opacity-50 blur-sm"></div>
             <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-yellow-500 opacity-20 blur-md"></div>
          </div>
          
          <div className="relative p-4 text-center">
             <h2 className="text-yellow-400 font-black text-2xl italic drop-shadow-md" style={{ fontFamily: 'sans-serif' }}>RECHARGE BONUS</h2>
             <div className="bg-yellow-400 text-blue-900 font-bold text-xs inline-block px-6 py-1 rounded-full transform -skew-x-12 mb-4 shadow-lg">
                THIS BONUS IS FOR USDT RECHARGE
             </div>

             {/* Table */}
             <div className="border-2 border-yellow-500 rounded-lg bg-blue-900/50 backdrop-blur-sm overflow-hidden">
                <div className="grid grid-cols-2 bg-blue-900 text-white text-xs font-bold py-2 border-b border-yellow-500">
                   <div>SINGLE RECHARGE</div>
                   <div>GET BONUS</div>
                </div>
                {bonusSlabs.map((slab, i) => (
                  <div key={i} className="grid grid-cols-2 border-b border-blue-800/50 last:border-0">
                    <div className="py-2 text-yellow-200 text-sm font-medium bg-blue-900/30 flex items-center justify-center">
                      {slab.range}
                    </div>
                    <div className="py-2 text-yellow-400 text-xl font-bold bg-blue-800/30 flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]">
                      {slab.bonus}
                    </div>
                  </div>
                ))}
             </div>
             
             {/* Pagination Dots */}
             <div className="flex justify-center gap-1.5 mt-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
             </div>
          </div>
        </div>

        {/* USDT Rate Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
           <div>
             <div className="text-gray-500 text-xs mb-1">USDT rate</div>
             <div className="text-blue-700 font-bold text-lg">1 USDT = 102.0 INR</div>
             <button className="bg-blue-700 text-white text-xs font-bold px-6 py-2 rounded-full mt-2 shadow-blue-200 shadow-lg">
               TOP UP
             </button>
           </div>
           <div className="w-16 h-16 rounded-full bg-yellow-200 border-4 border-yellow-300 flex items-center justify-center shadow-inner relative overflow-hidden">
              <div className="text-yellow-600 text-3xl font-black">U</div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent"></div>
           </div>
        </div>

        {/* Marquee */}
        <div className="bg-orange-400 rounded-full py-2 px-4 flex items-center text-white shadow-md">
           <IconBell className="w-5 h-5 mr-2" />
           <div className="text-xs font-medium flex-1 overflow-hidden whitespace-nowrap">
             Check out our latest updates!
           </div>
        </div>

        {/* Daily Total Recharge */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
           <div className="flex justify-between items-center mb-2">
             <div className="text-blue-700 font-bold">Daily Total Recharge :</div>
             <div className="flex gap-1">
               <span className="bg-[#00a0e9] text-white px-1.5 py-0.5 rounded text-sm font-bold">0</span>
               <span className="bg-[#00a0e9] text-white px-1.5 py-0.5 rounded text-sm font-bold">0</span>
               <span className="text-blue-700 font-bold">:</span>
               <span className="bg-[#00a0e9] text-white px-1.5 py-0.5 rounded text-sm font-bold">1</span>
               <span className="bg-[#00a0e9] text-white px-1.5 py-0.5 rounded text-sm font-bold">5</span>
             </div>
           </div>
           <div className="text-gray-500 font-bold text-sm mb-4">₹0.00</div>

           {/* Progress Steps */}
           <div className="relative">
              {/* Line */}
              <div className="absolute top-8 left-0 right-0 h-2 bg-gray-100 rounded-full"></div>
              
              <div className="flex justify-between relative z-10">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                     <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-500 flex items-center justify-center text-[10px] text-yellow-800 font-bold shadow-md relative">
                        <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-green-500 rounded-full text-white flex items-center justify-center text-[8px]">+</div>
                     </div>
                     <div className="mt-4 text-[10px] text-blue-600 font-bold">{m}</div>
                  </div>
                ))}
              </div>
              {/* Bottom Labels */}
              <div className="flex justify-between mt-2 px-1">
                 {['10k', '20k', '30k', '40k', '50k', '60k', '70k'].map((label, idx) => (
                   <span key={idx} className="text-[10px] text-gray-400 w-8 text-center">{label}</span>
                 ))}
              </div>
           </div>
        </div>

        {/* Withdraw Toggle */}
        <div className="bg-blue-600 rounded-t-xl p-5 text-white shadow-lg mt-4 pb-10">
           <div className="flex justify-between items-center mb-6">
             <div className="font-bold text-lg">Withdraw (closing)</div>
             <button 
               onClick={() => setWithdrawEnabled(!withdrawEnabled)}
               className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 ${withdrawEnabled ? 'bg-green-400' : 'bg-gray-400'}`}
             >
               <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${withdrawEnabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
             </button>
           </div>
           
           <div className="flex justify-between text-sm opacity-90 border-t border-blue-500 pt-4">
             <div>In Transaction</div>
             <div>Today's Withdraw</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;