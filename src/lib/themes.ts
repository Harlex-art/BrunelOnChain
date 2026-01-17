
export interface Theme {
    id: string;
    name: string;
    tagline: string;
    description: string;
    longLegs: { symbol: string; weight: number }[];
    shortHedge: string;
}

export const themes: Theme[] = [
    {
        id: "ai",
        name: "AI Basket",
        tagline: "Trade the AI narrative",
        description: "Exposure to leading Artificial Intelligence protocols and infrastructure.",
        longLegs: [
            { symbol: "FET", weight: 0.4 },
            { symbol: "RNDR", weight: 0.3 },
            { symbol: "TAO", weight: 0.3 },
        ],
        shortHedge: "ETH",
    },
    {
        id: "l2",
        name: "L2 Basket",
        tagline: "Bet on Ethereum scaling",
        description: "A basket of top Ethereum Layer 2 scaling solutions.",
        longLegs: [
            { symbol: "ARB", weight: 0.4 },
            { symbol: "OP", weight: 0.3 },
            { symbol: "STRK", weight: 0.3 },
        ],
        shortHedge: "BTC",
    },
    {
        id: "sol",
        name: "SOL Ecosystem",
        tagline: "Long the Solana ecosystem",
        description: "Comprehensive exposure to the Solana DeFi and infrastructure ecosystem.",
        longLegs: [
            { symbol: "SOL", weight: 0.5 },
            { symbol: "JUP", weight: 0.3 },
            { symbol: "JTO", weight: 0.2 },
        ],
        shortHedge: "ETH",
    },
    {
        id: "memehedge",
        name: "Meme Hedge",
        tagline: "Hedge risk by shorting memes",
        description: "Use Bitcoin dominance to hedge against volatile meme coin exposure.",
        longLegs: [{ symbol: "BTC", weight: 1.0 }],
        shortHedge: "MEME basket",
    },
];
