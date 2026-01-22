import React, { useState } from 'react';
import { IconHeadset, IconEye } from '../components/Icons';
import { dataService } from '../services/mockData';

const DepositScreen: React.FC<{ onSupportClick: () => void }> = ({ onSupportClick }) => {
  const [tab, setTab] = useState<'INR' | 'USDT'>('USDT');
  const [amount, setAmount] = useState<string>('');
  const rate = 99.0;
  
  const numericAmount = parseFloat(amount) || 0;
  const inrValue = numericAmount * rate;
  
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-gray-800 text-lg font-bold">Deposit</h1>
        <button onClick={onSupportClick} className="text-blue-900">
          <IconHeadset className="w-6 h-6" />
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white flex border-b border-gray-100">
        <button 
          className={`flex-1 py-3 text-sm font-bold ${tab === 'INR' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-400'}`}
          onClick={() => setTab('INR')}
        >
          INR
        </button>
        <button 
          className={`flex-1 py-3 text-sm font-bold ${tab === 'USDT' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-400'}`}
          onClick={() => setTab('USDT')}
        >
          USDT
        </button>
      </div>

      <div className="p-4 space-y-4">
        {/* Quota Card */}
        <div className="bg-white rounded-xl p-5 shadow-sm text-center">
           <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
             <div className="flex items-center gap-2">
               Quota <IconEye className="w-4 h-4" />
             </div>
             <span className="text-blue-600 text-xs font-semibold">How To Buy Quota</span>
           </div>
           <div className="text-blue-800 text-2xl font-bold my-4">0.00 INR</div>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
           <div className="flex gap-3 mb-4">
             <div className="bg-gray-50 border border-gray-200 rounded-lg flex-1 flex items-center px-4 py-3">
               <input 
                  type="number" 
                  placeholder="0.00" 
                  className="bg-transparent w-full outline-none text-gray-700 font-medium"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
               />
               <span className="text-gray-500 font-bold text-sm ml-2">USDT</span>
             </div>
             <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-lg flex items-center justify-center text-center">
               1 USDT = {rate.toFixed(1)} INR
             </div>
           </div>

           {/* Estimates */}
           <div className="bg-gray-50 rounded-lg p-3 space-y-3">
             <div className="flex justify-between text-sm">
               <span className="text-gray-500">Estimated bonus</span>
               <span className="text-gray-800 font-bold">0 INR</span>
             </div>
             <div className="border-t border-gray-200"></div>
             <div className="flex justify-between text-sm">
               <span className="text-gray-700 font-bold">You will receive</span>
               <span className="text-blue-700 font-bold">{inrValue ? Math.floor(inrValue) + ' INR' : '0 INR'}</span>
             </div>
           </div>
           
           <div className="mt-4 space-y-2">
              <p className="text-red-500 text-xs italic">
                * Each address is valid for 30 minutes, please do not save this address
              </p>
              <p className="text-gray-500 text-xs italic">
                * After the recharge is completed, please wait for 3-5 minutes for the deposit to arrive
              </p>
           </div>

           <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-lg mt-6 transition-colors shadow-blue-200 shadow-lg">
             Confirm
           </button>
        </div>
      </div>
    </div>
  );
};

export default DepositScreen;