
import React from "react";
import { SideDrawer } from "@/components/SideDrawer";
import { TopBar } from "@/components/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MigrationProgress } from "@/components/MigrationProgress";

const Transfers = () => {
  const activeTransfers = [
    {
      from: "Spotify",
      to: "Apple Music",
      progress: 68,
      songsTotal: 1243,
      songsCopied: 845,
      playlistsTotal: 28,
      playlistsCopied: 19,
    },
    {
      from: "YouTube Music",
      to: "Spotify",
      progress: 32,
      songsTotal: 567,
      songsCopied: 182,
      playlistsTotal: 12,
      playlistsCopied: 4,
    },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <SideDrawer />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Active Transfers</h1>
              <Button>New Transfer</Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {activeTransfers.map((transfer, index) => (
                <MigrationProgress key={index} {...transfer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfers;
