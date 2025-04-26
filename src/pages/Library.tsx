
import React from "react";
import { SideDrawer } from "@/components/SideDrawer";
import { TopBar } from "@/components/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, PlayCircle, Shuffle } from "lucide-react";

const Library = () => {
  const playlists = [
    { name: "Summer Vibes 2024", songs: 45, duration: "2h 35m" },
    { name: "Workout Mix", songs: 28, duration: "1h 45m" },
    { name: "Chill Evening", songs: 32, duration: "2h 10m" },
    { name: "Road Trip", songs: 52, duration: "3h 15m" },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <SideDrawer />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">My Library</h1>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Shuffle className="h-4 w-4 mr-2" />
                  Shuffle All
                </Button>
                <Button>
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Play All
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlists.map((playlist) => (
                <Card key={playlist.name} className="hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl">{playlist.name}</CardTitle>
                    <Music className="h-5 w-5 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{playlist.songs} songs</span>
                      <span>{playlist.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
