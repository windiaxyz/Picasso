import {
  MarketIndex,
  MarketSector,
  MarketNews,
  Stock,
  Mover,
  ForexPair,
  CryptoAsset,
} from "./types";

export const marketIndices: MarketIndex[] = [
  {
    name: "S&P 500",
    symbol: "SPX",
    value: 5667.56,
    change: 32.45,
    changePercent: 0.58,
    sparkline: [5580, 5595, 5610, 5602, 5625, 5618, 5640, 5635, 5650, 5660, 5655, 5667],
  },
  {
    name: "Dow Jones",
    symbol: "DJI",
    value: 42112.34,
    change: -87.12,
    changePercent: -0.21,
    sparkline: [42300, 42280, 42250, 42200, 42180, 42220, 42190, 42150, 42130, 42100, 42120, 42112],
  },
  {
    name: "Nasdaq",
    symbol: "IXIC",
    value: 17799.21,
    change: 156.78,
    changePercent: 0.89,
    sparkline: [17600, 17620, 17580, 17650, 17680, 17700, 17690, 17720, 17750, 17770, 17780, 17799],
  },
  {
    name: "Russell 2000",
    symbol: "RUT",
    value: 2078.45,
    change: -12.34,
    changePercent: -0.59,
    sparkline: [2095, 2092, 2098, 2090, 2085, 2088, 2082, 2080, 2084, 2079, 2076, 2078],
  },
];

export const marketSectors: MarketSector[] = [
  { name: "Technology", change: 1.24 },
  { name: "Healthcare", change: -0.45 },
  { name: "Financials", change: 0.67 },
  { name: "Energy", change: -1.12 },
  { name: "Consumer Disc.", change: 0.33 },
  { name: "Industrials", change: 0.15 },
  { name: "Materials", change: -0.28 },
  { name: "Utilities", change: 0.52 },
  { name: "Real Estate", change: -0.73 },
  { name: "Comm. Services", change: 0.91 },
];

export const marketNews: MarketNews[] = [
  {
    id: "1",
    title: "Fed signals potential rate cut in upcoming meeting",
    source: "Reuters",
    time: "2h ago",
  },
  {
    id: "2",
    title: "Tech stocks rally on strong earnings reports",
    source: "Bloomberg",
    time: "3h ago",
  },
  {
    id: "3",
    title: "Oil prices drop amid global demand concerns",
    source: "CNBC",
    time: "4h ago",
  },
  {
    id: "4",
    title: "Treasury yields fall as investors seek safe havens",
    source: "WSJ",
    time: "5h ago",
  },
  {
    id: "5",
    title: "Retail sales data exceeds analyst expectations",
    source: "MarketWatch",
    time: "6h ago",
  },
];

export const watchlistStocks: Stock[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 217.34, change: 3.12, changePercent: 1.46, volume: "58.2M", marketCap: "3.34T" },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 428.50, change: -2.18, changePercent: -0.51, volume: "22.1M", marketCap: "3.18T" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 175.62, change: 4.25, changePercent: 2.48, volume: "28.7M", marketCap: "2.17T" },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 198.45, change: 1.87, changePercent: 0.95, volume: "45.3M", marketCap: "2.07T" },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 142.78, change: 5.63, changePercent: 4.11, volume: "312.5M", marketCap: "3.49T" },
  { symbol: "META", name: "Meta Platforms", price: 612.30, change: -8.45, changePercent: -1.36, volume: "18.9M", marketCap: "1.55T" },
  { symbol: "TSLA", name: "Tesla Inc.", price: 275.60, change: 12.30, changePercent: 4.67, volume: "98.4M", marketCap: "882B" },
  { symbol: "BRK.B", name: "Berkshire Hathaway", price: 478.92, change: 1.05, changePercent: 0.22, volume: "3.2M", marketCap: "1.04T" },
  { symbol: "JPM", name: "JPMorgan Chase", price: 248.15, change: -1.32, changePercent: -0.53, volume: "8.7M", marketCap: "715B" },
  { symbol: "V", name: "Visa Inc.", price: 312.88, change: 2.44, changePercent: 0.79, volume: "6.1M", marketCap: "641B" },
];

export const topGainers: Mover[] = [
  { symbol: "SMCI", name: "Super Micro Computer", price: 48.92, changePercent: 12.45 },
  { symbol: "MSTR", name: "MicroStrategy", price: 368.50, changePercent: 8.72 },
  { symbol: "PLTR", name: "Palantir Technologies", price: 98.34, changePercent: 6.89 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 275.60, changePercent: 4.67 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 142.78, changePercent: 4.11 },
];

export const topLosers: Mover[] = [
  { symbol: "INTC", name: "Intel Corp.", price: 22.15, changePercent: -5.34 },
  { symbol: "PFE", name: "Pfizer Inc.", price: 24.80, changePercent: -3.87 },
  { symbol: "BA", name: "Boeing Co.", price: 168.42, changePercent: -3.12 },
  { symbol: "NKE", name: "Nike Inc.", price: 72.55, changePercent: -2.65 },
  { symbol: "DIS", name: "Walt Disney Co.", price: 108.30, changePercent: -2.18 },
];

export const forexPairs: ForexPair[] = [
  { pair: "EUR/USD", rate: 1.0842, change: 0.15 },
  { pair: "GBP/USD", rate: 1.2935, change: -0.08 },
  { pair: "USD/JPY", rate: 150.82, change: 0.32 },
  { pair: "USD/CHF", rate: 0.8812, change: -0.12 },
  { pair: "AUD/USD", rate: 0.6578, change: 0.21 },
  { pair: "USD/CAD", rate: 1.3645, change: -0.05 },
];

export const cryptoAssets: CryptoAsset[] = [
  { symbol: "BTC", name: "Bitcoin", price: 87245.30, change: 1842.50, changePercent: 2.16, marketCap: "1.72T" },
  { symbol: "ETH", name: "Ethereum", price: 2045.80, change: -32.40, changePercent: -1.56, marketCap: "246B" },
  { symbol: "SOL", name: "Solana", price: 142.65, change: 8.90, changePercent: 6.66, marketCap: "68.5B" },
  { symbol: "BNB", name: "BNB", price: 612.40, change: 5.20, changePercent: 0.86, marketCap: "89.2B" },
  { symbol: "XRP", name: "XRP", price: 2.38, change: -0.05, changePercent: -2.06, marketCap: "137B" },
  { symbol: "ADA", name: "Cardano", price: 0.72, change: 0.03, changePercent: 4.35, marketCap: "25.4B" },
];
