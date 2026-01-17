"use client";

import { LiFiWidget } from "@lifi/widget";

export default function OnboardPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start p-8">
            <h1 className="text-3xl font-bold mb-2">
                Onboard to Hyperliquid
            </h1>

            <p className="text-gray-500 mb-6">
                Bridge funds from any chain into HyperEVM using LI.FI.
            </p>

            <div className="w-full max-w-2xl">
                <LiFiWidget
                    integrator="brunelonchain"
                    config={{
                        variant: "wide",
                    }}
                />
            </div>
        </main>
    );
}
