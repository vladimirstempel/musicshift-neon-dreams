
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full synthwave-grid-background flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-neon-pink/5 to-neon-blue/10 animate-gradient-background" style={{ backgroundSize: "400% 400%" }} />

      <header className="relative z-10 container mx-auto py-6 px-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            className="border-neon-purple/50 hover:border-neon-purple"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button 
            className="gradient-button"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex-1 relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10 py-16">
        <div className="flex-1 max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
              Seamlessly migrate
            </span>{" "}
            your music library between platforms
          </h1>
          <p className="text-xl text-muted-foreground">
            Transfer your carefully curated playlists, liked songs, and albums between Spotify, Apple Music, YouTube Music, and more with just a few clicks.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="gradient-button text-lg py-6 px-8"
              onClick={() => navigate("/dashboard")}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-neon-purple/50 hover:border-neon-purple py-6 px-8"
            >
              How It Works
            </Button>
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <div className="aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-card/80 backdrop-blur-md rounded-3xl border border-neon-purple/20 shadow-lg flex items-center justify-center p-6 animate-float">
                <div className="relative w-full h-full flex flex-col justify-center items-center">
                  <div className="absolute w-32 h-32 rounded-full bg-neon-purple/20 blur-xl -top-10 -left-10" />
                  <div className="absolute w-20 h-20 rounded-full bg-neon-pink/20 blur-lg bottom-0 right-0" />
                  
                  <div className="relative z-10 w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink animate-pulse-glow" />
                  </div>
                  
                  <div className="w-full h-2 bg-muted rounded-full mb-6">
                    <div className="h-full w-2/3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full" />
                  </div>
                  
                  <div className="w-full space-y-3">
                    <div className="h-2 bg-muted/50 rounded-full w-full" />
                    <div className="h-2 bg-muted/50 rounded-full w-5/6" />
                    <div className="h-2 bg-muted/50 rounded-full w-4/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
