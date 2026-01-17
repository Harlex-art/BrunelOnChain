
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { themes } from "@/lib/themes";

export default function ThemesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Themes</h1>
        <p className="text-muted-foreground">Explore and manage your trading themes.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {themes.map((theme) => (
          <Card key={theme.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{theme.name}</CardTitle>
              </div>
              <CardDescription>{theme.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 text-sm">
                  <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                    Long: {theme.longLegs.map(l => l.symbol).join(", ")}
                  </Badge>
                  <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-200">
                    Short: {theme.shortHedge}
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/trade?theme=${theme.id}`}>Trade Theme</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
