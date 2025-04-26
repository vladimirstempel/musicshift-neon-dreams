
import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 animate-pulse-glow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink animate-logo-spin" 
             style={{ animationDuration: "15s" }} />
        <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">M</span>
        </div>
      </div>
      <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue animate-glow">
        MusicShift
      </span>
    </div>
  );
}
