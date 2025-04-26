
import React from "react";
import { SideDrawer } from "@/components/SideDrawer";
import { TopBar } from "@/components/TopBar";
import { PlatformCard } from "@/components/PlatformCard";
import { MigrationProgress } from "@/components/MigrationProgress";
import { LibraryStats } from "@/components/LibraryStats";

const platformsData = [
  { 
    name: "Spotify", 
    logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png", 
    connected: true,
    songs: 1243,
    playlists: 28
  },
  { 
    name: "Apple Music", 
    logo: "https://www.apple.com/v/apple-music/s/images/overview/icon_apple_music__c7xrxfud0gsy_large_2x.png", 
    connected: true,
    songs: 985,
    playlists: 15
  },
  { 
    name: "YouTube Music", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png", 
    connected: false
  },
  { 
    name: "Tidal", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/TidalLogo.svg/1280px-TidalLogo.svg.png", 
    connected: false
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <SideDrawer />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformsData.map((platform) => (
                <PlatformCard 
                  key={platform.name}
                  name={platform.name}
                  logo={platform.logo}
                  connected={platform.connected}
                  songs={platform.songs}
                  playlists={platform.playlists}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MigrationProgress 
                from="Spotify"
                to="Apple Music"
                progress={68}
                songsTotal={1243}
                songsCopied={845}
                playlistsTotal={28}
                playlistsCopied={19}
              />
              
              <LibraryStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
