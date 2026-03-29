import { MarketIndex, MarketSector, MarketNews } from "./types";

export const marketIndices: MarketIndex[] = [
  {
    name: "S&P 500",
    symbol: "SPX",
    value: 5667.56,
    change: 32.45,
    changePercent: 0.58,
  },
  {
    name: "Dow Jones",
    symbol: "DJI",
    value: 42112.34,
    change: -87.12,
    changePercent: -0.21,
  },
  {
    name: "Nasdaq",
    symbol: "IXIC",
    value: 17799.21,
    change: 156.78,
    changePercent: 0.89,
  },
  {
    name: "Russell 2000",
    symbol: "RUT",
    value: 2078.45,
    change: -12.34,
    changePercent: -0.59,
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
