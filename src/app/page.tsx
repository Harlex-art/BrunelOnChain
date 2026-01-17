"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-2">ThemeFlow</h1>
      <p className="text-gray-500 mb-8">
        Trade narratives, not single tokens.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Basket */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-1">AI Basket</h2>
          <p className="text-gray-500 mb-4">Trade the AI narrative</p>

          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
              Long: FET, RNDR, TAO
            </span>
            <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
              Short: ETH
            </span>
          </div>

          <button
            onClick={() => router.push("/onboard?theme=ai")}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Trade Theme
          </button>
        </div>

        {/* L2 Basket */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-1">L2 Basket</h2>
          <p className="text-gray-500 mb-4">Bet on Ethereum scaling</p>

          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
              Long: ARB, OP, STRK
            </span>
            <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
              Short: BTC
            </span>
          </div>

          <button
            onClick={() => router.push("/onboard?theme=l2")}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Trade Theme
          </button>
        </div>

        {/* SOL Ecosystem */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-1">SOL Ecosystem</h2>
          <p className="text-gray-500 mb-4">Long the Solana ecosystem</p>

          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
              Long: SOL, JUP, JTO
            </span>
            <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
              Short: ETH
            </span>
          </div>

          <button
            onClick={() => router.push("/onboard?theme=sol")}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Trade Theme
          </button>
        </div>

        {/* Meme Hedge */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-1">Meme Hedge</h2>
          <p className="text-gray-500 mb-4">
            Hedge risk by shorting memes
          </p>

          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
              Long: BTC
            </span>
            <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
              Short: Meme Basket
            </span>
          </div>

          <button
            onClick={() => router.push("/onboard?theme=meme")}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Trade Theme
          </button>
        </div>
      </div>
    </main>
  );
}

