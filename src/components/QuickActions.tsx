
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, Music, PlayCircle, Search } from "lucide-react";

export function QuickActions() {
  return (
    <Card className="synthwave-card">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
            <Music className="h-6 w-6 mb-2" />
            <span>New Transfer</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
            <List className="h-6 w-6 mb-2" />
            <span>Playlists</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
            <Search className="h-6 w-6 mb-2" />
            <span>Find Songs</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
            <PlayCircle className="h-6 w-6 mb-2" />
            <span>Play Queue</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
