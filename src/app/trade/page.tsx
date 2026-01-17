
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { themes } from "@/lib/themes";

interface TradePageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function TradePage({ searchParams }: TradePageProps) {
    const params = await searchParams;
    const themeId = params.theme;
    const theme = themes.find((t) => t.id === themeId);

    if (!theme) {
        return (
            <div className="flex h-[50vh] flex-col items-center justify-center gap-4">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <CardTitle>Theme Not Found</CardTitle>
                        <CardDescription>The theme you are looking for does not exist or is invalid.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button asChild>
                            <Link href="/">Return to Home</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild className="-ml-2">
                        <Link href="/">← Back</Link>
                    </Button>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">{theme.name}</h1>
                <p className="text-muted-foreground">{theme.tagline}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Trade Ticket</CardTitle>
                        <CardDescription>Execute trades for {theme.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <div className="rounded-lg bg-muted p-4 text-center text-sm text-muted-foreground">
                                <p className="font-medium">Selected Theme</p>
                                <p className="text-lg text-foreground">{theme.name}</p>
                            </div>
                            <Button className="w-full">Place Order (Coming Soon)</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Theme Composition</CardTitle>
                        <CardDescription>Target weights and constituents.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Long Legs</h3>
                                <div className="space-y-2">
                                    {theme.longLegs.map((leg) => (
                                        <div key={leg.symbol} className="flex items-center justify-between rounded-md border p-2 text-sm">
                                            <span className="font-medium">{leg.symbol}</span>
                                            <Badge variant="secondary">{(leg.weight * 100).toFixed(0)}%</Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Short Hedge</h3>
                                <div className="rounded-md border border-red-200 bg-red-50/50 p-2 text-sm dark:border-red-900/50 dark:bg-red-900/10">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-red-600 dark:text-red-400">{theme.shortHedge}</span>
                                        <Badge variant="outline" className="text-red-600 border-red-200 dark:text-red-400 dark:border-red-900">Hedge</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>About this Theme</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {theme.description}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
