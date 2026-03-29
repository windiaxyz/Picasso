export interface MarketIndex {
  name: string;
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
  sparkline: number[];
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

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
}

export interface Mover {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
}

export interface ForexPair {
  pair: string;
  rate: number;
  change: number;
}

export interface CryptoAsset {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
}
