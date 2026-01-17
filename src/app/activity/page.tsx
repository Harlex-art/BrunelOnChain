
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ActivityPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Activity</h1>
                <p className="text-muted-foreground">View your recent transactions and alerts.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>History of your trades and transfers.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                <div className="flex flex-col">
                                    <span className="font-medium">Trade #{1000 + i}</span>
                                    <span className="text-sm text-muted-foreground">Executed on Jan {10 + i}, 2026</span>
                                </div>
                                <div className="font-medium">
                                    +{(Math.random() * 10).toFixed(2)} ETH
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
