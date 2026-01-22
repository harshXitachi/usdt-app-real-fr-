import { User, TeamStats, Wallet } from '../types';

// Simulating a backend database in localStorage
const STORAGE_KEY_USER = 'umoney_user';
const STORAGE_KEY_TOKEN = 'umoney_token';

const DEFAULT_USER: User = {
  id: '7851805067',
  phone: '7851805067',
  inviteCode: '254762',
  balance: 0.00,
  quota: 0.00,
  todaysEarning: 0.00,
  rewardRatio: 3,
  paymentPinSet: true,
};

const TEAM_STATS: TeamStats = {
  todayDeposit: 0.00,
  totalDeposit: 0.00,
  commissionTotal: 0.0,
  commissionYesterday: 0.0,
  commissionToday: 0.0,
  teamCount: 0,
  todayNewTeam: 0,
};

export const authService = {
  login: async (phone: string, pin: string): Promise<{ user: User; token: string }> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // In a real app, this would be a POST request to /api/login
    if (phone && pin) {
      const user = DEFAULT_USER;
      const token = 'mock_jwt_token_' + Date.now();
      localStorage.setItem(STORAGE_KEY_TOKEN, token);
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      return { user, token };
    }
    throw new Error('Invalid credentials');
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem(STORAGE_KEY_USER);
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(STORAGE_KEY_TOKEN);
  },

  getCurrentUser: (): User | null => {
    const data = localStorage.getItem(STORAGE_KEY_USER);
    return data ? JSON.parse(data) : null;
  }
};

export const dataService = {
  getTeamStats: async (): Promise<TeamStats> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return TEAM_STATS;
  },

  getWallets: async (): Promise<Wallet[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return []; // Return empty to match "No wallets added" screenshot
  },
  
  // Real financial logic for USDT -> INR
  convertUsdtToInr: (usdt: number, rate: number): number => {
    return parseFloat((usdt * rate).toFixed(2));
  },

  calculateBonus: (amountUsdt: number): number => {
    if (amountUsdt >= 50.5 && amountUsdt <= 100.9) return 100;
    if (amountUsdt >= 101.0 && amountUsdt <= 151.4) return 150;
    if (amountUsdt >= 151.5 && amountUsdt <= 201.9) return 200;
    if (amountUsdt >= 202.0) return 250;
    return 0;
  }
};