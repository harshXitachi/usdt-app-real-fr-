import React from 'react';
import { Tab } from '../types';
import { Home, NotebookPen, Drill, Users, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const getTabColor = (tab: Tab) => activeTab === tab ? 'text-blue-600' : 'text-gray-400';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around z-50 pb-1">
      <button onClick={() => onTabChange(Tab.HOME)} className={`flex flex-col items-center justify-center w-full ${getTabColor(Tab.HOME)}`}>
        <Home size={22} strokeWidth={2.5} />
        <span className="text-[10px] mt-1 font-medium">Home</span>
      </button>
      <button onClick={() => onTabChange(Tab.DEPOSIT)} className={`flex flex-col items-center justify-center w-full ${getTabColor(Tab.DEPOSIT)}`}>
        <NotebookPen size={22} strokeWidth={2.5} />
        <span className="text-[10px] mt-1 font-medium">Deposit</span>
      </button>
      <button onClick={() => onTabChange(Tab.TOOL)} className={`flex flex-col items-center justify-center w-full ${getTabColor(Tab.TOOL)}`}>
        <div className={`rounded-full p-0.5 ${activeTab === Tab.TOOL ? 'bg-green-100' : ''}`}>
           <Drill size={22} strokeWidth={2.5} className={activeTab === Tab.TOOL ? 'text-green-600' : 'text-gray-400'} />
        </div>
        <span className={`text-[10px] mt-1 font-medium ${activeTab === Tab.TOOL ? 'text-green-600' : 'text-gray-400'}`}>Tool</span>
      </button>
      <button onClick={() => onTabChange(Tab.TEAMS)} className={`flex flex-col items-center justify-center w-full ${getTabColor(Tab.TEAMS)}`}>
        <Users size={22} strokeWidth={2.5} />
        <span className="text-[10px] mt-1 font-medium">Teams</span>
      </button>
      <button onClick={() => onTabChange(Tab.ASSETS)} className={`flex flex-col items-center justify-center w-full ${getTabColor(Tab.ASSETS)}`}>
        <User size={22} strokeWidth={2.5} />
        <span className="text-[10px] mt-1 font-medium">Assets</span>
      </button>
    </div>
  );
};

export default BottomNav;