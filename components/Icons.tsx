import React from 'react';
import { Home, Wallet, Users, Settings, Plus, Headset, ChevronRight, Copy, Eye, Bell, ArrowRightLeft, CreditCard, Lock, RefreshCw, LogOut, Receipt, History, ShieldCheck } from 'lucide-react';

export const IconHome = ({ className }: { className?: string }) => <Home className={className} />;
export const IconDeposit = ({ className }: { className?: string }) => <Receipt className={className} />;
export const IconTool = ({ className }: { className?: string }) => <Settings className={className} />; // Using Settings/Tool metaphor
export const IconTeam = ({ className }: { className?: string }) => <Users className={className} />;
export const IconAssets = ({ className }: { className?: string }) => <Wallet className={className} />;
export const IconHeadset = ({ className }: { className?: string }) => <Headset className={className} />;
export const IconPlus = ({ className }: { className?: string }) => <Plus className={className} />;
export const IconChevronRight = ({ className }: { className?: string }) => <ChevronRight className={className} />;
export const IconCopy = ({ className }: { className?: string }) => <Copy className={className} />;
export const IconEye = ({ className }: { className?: string }) => <Eye className={className} />;
export const IconBell = ({ className }: { className?: string }) => <Bell className={className} />;
export const IconArrow = ({ className }: { className?: string }) => <ArrowRightLeft className={className} />;
export const IconCard = ({ className }: { className?: string }) => <CreditCard className={className} />;
export const IconLock = ({ className }: { className?: string }) => <Lock className={className} />;
export const IconRefresh = ({ className }: { className?: string }) => <RefreshCw className={className} />;
export const IconLogout = ({ className }: { className?: string }) => <LogOut className={className} />;
export const IconHistory = ({ className }: { className?: string }) => <History className={className} />;
export const IconShield = ({ className }: { className?: string }) => <ShieldCheck className={className} />;

// Custom icons to match screenshots more closely where standard Lucide might differ significantly
export const IconCoin = () => (
  <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-yellow-500 flex items-center justify-center text-[10px] font-bold text-yellow-800 shadow-sm">
    $
  </div>
);

export const IconUSDT = () => (
  <div className="w-12 h-12 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center text-yellow-600 font-bold text-xl shadow-inner">
    U
  </div>
);