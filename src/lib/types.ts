export interface MarketIndex {
  name: string;
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
}

export interface MarketSector {
  name: string;
  change: number;
}

export interface MarketNews {
  id: string;
  title: string;
  source: string;
  time: string;
}
