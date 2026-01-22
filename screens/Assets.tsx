import React from 'react';
import { User } from '../types';
import { IconCopy, IconRefresh, IconHistory, IconHeadset, IconLock, IconLogout, IconChevronRight } from '../components/Icons';

interface AssetsScreenProps {
  user: User;
  onLogout: () => void;
  onSupportClick: () => void;
}

const AssetsScreen: React.FC<AssetsScreenProps> = ({ user, onLogout, onSupportClick }) => {
  const menuItems = [
    { icon: <div className="bg-gray-200 p-1.5 rounded"><IconHistory className="w-5 h-5 text-gray-600" /></div>, label: 'Quota History' },
    { icon: <div className="bg-green-100 p-1.5 rounded"><svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>, label: 'Deposit History' },
    { icon: <div className="bg-red-100 p-1.5 rounded"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></div>, label: 'Withdrawal History' },
    { icon: <div className="bg-orange-100 p-1.5 rounded"><IconHeadset className="w-5 h-5 text-orange-600" /></div>, label: 'Support Center', onClick: onSupportClick },
    { icon: <div className="bg-gray-100 p-1.5 rounded"><svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>, label: 'Payment Pin' },
    { icon: <div className="bg-blue-100 p-1.5 rounded"><IconLock className="w-5 h-5 text-blue-600" /></div>, label: 'Change Password' },
    { icon: <div className="bg-blue-100 p-1.5 rounded"><svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg></div>, label: 'Version Update' },
    { icon: <div className="bg-red-100 p-1.5 rounded"><IconLogout className="w-5 h-5 text-red-600" /></div>, label: 'Logout', onClick: onLogout },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Profile Section */}
      <div className="bg-blue-800 p-4 pb-16">
         <div className="flex items-start justify-between">
            <div className="flex gap-3">
               <div className="w-14 h-14 bg-yellow-200 rounded-full overflow-hidden border-2 border-white">
                  {/* Cartoon avatar simulation */}
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
               </div>
               <div className="text-white">
                  <div className="flex items-center gap-2 mb-1">
                     <span className="text-lg font-bold">{user.phone}</span>
                     <IconCopy className="w-4 h-4 opacity-70" />
                  </div>
                  <div className="flex items-center gap-2 text-xs opacity-80">
                     <span>ID: {user.inviteCode}</span>
                     <IconCopy className="w-3 h-3" />
                  </div>
               </div>
            </div>
            <div className="bg-white text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
               Reward Ratio: {user.rewardRatio}
            </div>
         </div>
      </div>

      <div className="px-4 -mt-10">
         {/* Balance Card */}
         <div className="bg-blue-700 rounded-xl p-5 text-white shadow-lg flex justify-between items-center mb-4">
            <div>
               <div className="flex items-center gap-1 mb-1">
                  <span className="text-xl font-bold">₹ 0.00</span>
               </div>
               <div className="text-xs opacity-80">Quota</div>
            </div>
            <div className="w-px h-8 bg-blue-500"></div>
            <div>
               <div className="text-xl font-bold">0.00</div>
               <div className="text-xs opacity-80">Today's Earning</div>
            </div>
         </div>

         {/* Menu List */}
         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {menuItems.map((item, idx) => (
               <button 
                  key={idx} 
                  onClick={item.onClick}
                  className="w-full flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 active:bg-gray-100 transition-colors"
               >
                  <div className="flex items-center gap-3">
                     {item.icon}
                     <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                  </div>
                  <IconChevronRight className="w-4 h-4 text-gray-400" />
               </button>
            ))}
         </div>
      </div>
    </div>
  );
};

export default AssetsScreen;