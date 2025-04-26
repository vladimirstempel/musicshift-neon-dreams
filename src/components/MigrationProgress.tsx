
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface MigrationProgressProps {
  from: string;
  to: string;
  progress: number;
  songsTotal: number;
  songsCopied: number;
  playlistsTotal: number;
  playlistsCopied: number;
}

export function MigrationProgress({
  from,
  to,
  progress,
  songsTotal,
  songsCopied,
  playlistsTotal,
  playlistsCopied
}: MigrationProgressProps) {
  return (
    <Card className="synthwave-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>
            Migration: {from} → {to}
          </span>
          <span className="text-sm font-normal text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={progress} className="h-2" />
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <p className="text-muted-foreground">Songs</p>
            <p className="font-medium">
              {songsCopied} / {songsTotal}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Playlists</p>
            <p className="font-medium">
              {playlistsCopied} / {playlistsTotal}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
