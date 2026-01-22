import React from 'react';
import { IconHeadset, IconCopy, IconTeam, IconEye } from '../components/Icons';
import { Calendar, Wallet } from 'lucide-react';

const TeamScreen: React.FC<{ onSupportClick: () => void }> = ({ onSupportClick }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-700 p-4 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-lg font-bold">Team</h1>
          <button onClick={onSupportClick} className="text-white">
            <IconHeadset className="w-6 h-6" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4">
           <div className="bg-white rounded-lg p-4 flex-1">
              <div className="flex items-center gap-2 mb-2 text-gray-700 text-xs font-bold">
                 <Calendar className="w-4 h-4 text-blue-500" />
                 Today
              </div>
              <div className="text-gray-500 text-xs mb-1">Team Deposit</div>
              <div className="text-blue-600 font-bold text-lg">₹ 0.00</div>
           </div>
           <div className="bg-white rounded-lg p-4 flex-1">
              <div className="flex items-center gap-2 mb-2 text-gray-700 text-xs font-bold">
                 <Wallet className="w-4 h-4 text-green-500" />
                 Total
              </div>
              <div className="text-gray-500 text-xs mb-1">Team Deposit</div>
              <div className="text-green-600 font-bold text-lg">₹ 0.00</div>
           </div>
        </div>
      </div>

      <div className="px-4 -mt-16">
        {/* Commission Card */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl p-5 text-white shadow-lg mb-6">
           <div className="flex items-center gap-2 mb-4">
             <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px]">$</div>
             <span className="font-bold text-sm">My Total Commission</span>
           </div>
           
           <div className="text-3xl font-bold mb-6">₹ 0.0</div>

           <div className="space-y-3 text-xs">
             <div className="flex justify-between opacity-80">
               <span>Commission Yesterday</span>
               <span>0.0</span>
             </div>
             <div className="flex justify-between opacity-80">
               <span>Team Count</span>
               <span>0</span>
             </div>
             <div className="flex justify-between text-green-300">
               <span>Commission Today</span>
               <span>+0.0</span>
             </div>
             <div className="flex justify-between text-green-300">
               <span>Today New Team</span>
               <span>+0</span>
             </div>
           </div>
        </div>

        {/* Invite Link */}
        <div className="mb-6">
           <h3 className="text-blue-900 font-bold text-sm mb-3">Invitation Link</h3>
           <div className="flex shadow-sm rounded-lg overflow-hidden border border-gray-200 bg-white">
              <div className="flex-1 px-4 py-3 text-sm text-blue-800">https://t.ly/UgZn7</div>
              <button className="bg-blue-800 w-12 flex items-center justify-center text-white">
                 <IconCopy className="w-5 h-5" />
              </button>
           </div>
        </div>

        {/* Ways to Invite */}
        <div className="mb-8">
           <h3 className="text-blue-900 font-bold text-sm mb-4">More Ways To Invite</h3>
           <div className="flex justify-between px-2">
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                 </div>
                 <span className="text-xs text-gray-600">Facebook</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-400">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.201 15.659c-.217.203-.505.341-.815.341-.655 0-1.125-.589-.926-1.211l1.503-4.577c.074-.226.046-.432-.078-.549-.123-.117-.333-.116-.583-.005l-3.321 1.486c-.22.098-.475.148-.727.148-.541 0-1.018-.236-1.288-.637l-.872-1.291c-.347-.514-.158-1.218.406-1.489l8.604-4.138c.49-.236 1.077-.024 1.314.471l.002.003c.237.494.025 1.08-.469 1.316l-2.75 1.32z"/></svg>
                 </div>
                 <span className="text-xs text-gray-600">Telegram</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.637 3.891 1.685 5.456l-.711 2.599 3.515-.754zm12.973-5.26c-.34-.171-2.016-1.003-2.329-1.117-.312-.116-.54-.171-.767.171-.227.342-.882 1.117-1.08 1.346-.197.23-.396.257-.736.086-.34-.171-1.436-5.308-2.748-2.924-.083-.227-.183-.426-.306-.597-.171-.342.063-.526.248-.707.169-.165.342-.426.512-.628.169-.202.227-.342.34-.571.114-.23.057-.428-.028-.598-.086-.171-.767-1.859-1.05-2.545-.276-.665-.556-.574-.767-.585-.197-.011-.424-.013-.652-.013-.227 0-.597.086-.91.428-.312.342-1.192 1.168-1.192 2.85 0 1.682 1.222 3.308 1.393 3.536.171.228 2.409 3.682 5.836 5.161 2.031.877 2.793.702 3.315.655.586-.052 1.868-.768 2.133-1.509.264-.741.264-1.375.185-1.509-.079-.134-.277-.217-.617-.389z"/></svg>
                 </div>
                 <span className="text-xs text-gray-600">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-800">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                 </div>
                 <span className="text-xs text-gray-600">QR Code</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                 </div>
                 <span className="text-xs text-gray-600">Share</span>
              </div>
           </div>
        </div>

        {/* Team Detail */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
           <div className="flex items-center gap-3 text-blue-900 font-bold text-sm">
             <IconTeam className="w-5 h-5" />
             Team Detail
           </div>
           <button className="flex items-center gap-1 text-blue-700 text-xs font-bold">
             <IconEye className="w-4 h-4" /> View
           </button>
        </div>

      </div>
    </div>
  );
};

export default TeamScreen;