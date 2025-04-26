
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlatformCardProps {
  name: string;
  logo: string;
  connected: boolean;
  songs?: number;
  playlists?: number;
}

export function PlatformCard({ name, logo, connected, songs, playlists }: PlatformCardProps) {
  return (
    <Card className="synthwave-card overflow-hidden">
      <div className="relative h-40 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-purple to-neon-pink" />
        <img 
          src={logo} 
          alt={name} 
          className="w-20 h-20 object-contain" 
        />
        {connected && (
          <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm p-1 rounded-full">
            <Check className="h-4 w-4 text-neon-pink" />
          </div>
        )}
      </div>
      
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        
        {connected ? (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Songs:</span>
              <span>{songs?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Playlists:</span>
              <span>{playlists}</span>
            </div>
            <Button variant="default" className="w-full gradient-button">
              Transfer From
            </Button>
          </>
        ) : (
          <Button variant="outline" className="w-full border-neon-purple/50 hover:border-neon-purple">
            Connect Account
          </Button>
        )}
      </div>
    </Card>
  );
}
