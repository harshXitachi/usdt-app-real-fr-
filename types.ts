export interface User {
  id: string;
  phone: string;
  inviteCode: string;
  balance: number;
  quota: number;
  todaysEarning: number;
  rewardRatio: number;
  paymentPinSet: boolean;
}

export interface TeamStats {
  todayDeposit: number;
  totalDeposit: number;
  commissionTotal: number;
  commissionYesterday: number;
  commissionToday: number;
  teamCount: number;
  todayNewTeam: number;
}

export interface Wallet {
  id: string;
  address: string;
  type: 'USDT' | 'BANK';
}

export enum Tab {
  HOME = 'home',
  DEPOSIT = 'deposit',
  TOOL = 'tool',
  TEAMS = 'teams',
  ASSETS = 'assets'
}