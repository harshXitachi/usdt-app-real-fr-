import React, { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/Home';
import DepositScreen from './screens/Deposit';
import ToolsScreen from './screens/Tools';
import TeamScreen from './screens/Team';
import AssetsScreen from './screens/Assets';
import LoginScreen from './screens/Login';
import SupportScreen from './screens/Support';
import { Tab, User } from './types';
import { authService } from './services/mockData';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = authService.getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setInitializing(false);
  }, []);

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    setActiveTab(Tab.HOME);
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
  };

  const openSupport = () => setIsSupportOpen(true);

  if (initializing) {
    return <div className="min-h-screen bg-white flex items-center justify-center text-blue-600">Loading...</div>;
  }

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative shadow-2xl overflow-hidden">
      <div className="h-full">
        {activeTab === Tab.HOME && <HomeScreen onSupportClick={openSupport} />}
        {activeTab === Tab.DEPOSIT && <DepositScreen onSupportClick={openSupport} />}
        {activeTab === Tab.TOOL && <ToolsScreen onSupportClick={openSupport} />}
        {activeTab === Tab.TEAMS && <TeamScreen onSupportClick={openSupport} />}
        {activeTab === Tab.ASSETS && <AssetsScreen user={user} onLogout={handleLogout} onSupportClick={openSupport} />}
      </div>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      {isSupportOpen && <SupportScreen onClose={() => setIsSupportOpen(false)} />}
    </div>
  );
};

export default App;