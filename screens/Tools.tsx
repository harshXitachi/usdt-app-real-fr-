import React from 'react';
import { IconHeadset, IconPlus } from '../components/Icons';
import { Wallet } from 'lucide-react';

const ToolsScreen: React.FC<{ onSupportClick: () => void }> = ({ onSupportClick }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
       {/* Header */}
       <div className="bg-white p-4 flex justify-between items-center">
        <h1 className="text-gray-800 text-lg font-bold">Tools</h1>
        <button onClick={onSupportClick} className="text-blue-900">
          <IconHeadset className="w-6 h-6" />
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center h-[70vh]">
         <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
            <Wallet className="w-12 h-12 text-white" strokeWidth={1.5} />
         </div>
         <h3 className="text-gray-800 font-bold text-lg mb-2">No wallets added</h3>
         <p className="text-gray-500 text-sm">Add a wallet to start</p>
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-24 right-6 w-14 h-14 bg-blue-700 rounded-xl shadow-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
        <IconPlus className="w-8 h-8" />
      </button>
    </div>
  );
};

export default ToolsScreen;