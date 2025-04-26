
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { 
  Menu, 
  Home, 
  ArrowLeft, 
  ArrowRight,
  User, 
  Calendar,
  List, 
  Check,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Library", href: "/library", icon: List },
  { name: "Transfers", href: "/transfers", icon: ArrowRight },
  { name: "History", href: "/history", icon: Calendar },
  { name: "Account", href: "/account", icon: User },
];

type MusicPlatform = {
  name: string;
  connected: boolean;
};

const platforms: MusicPlatform[] = [
  { name: "Spotify", connected: true },
  { name: "Apple Music", connected: true },
  { name: "YouTube Music", connected: false },
  { name: "Tidal", connected: false },
];

export function SideDrawer() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={cn(
        "h-screen bg-card border-r border-border transition-all duration-300 relative flex flex-col",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="absolute -right-3 top-10">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="rounded-full h-6 w-6 bg-background"
        >
          {expanded ? (
            <ArrowLeft className="h-3 w-3" />
          ) : (
            <ArrowRight className="h-3 w-3" />
          )}
        </Button>
      </div>

      <div className="p-4 border-b border-border">
        {expanded ? (
          <Logo />
        ) : (
          <div className="flex justify-center">
            <Logo className="scale-75" />
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center px-2 py-2.5 text-sm font-medium rounded-md",
                "text-foreground hover:bg-muted transition duration-150 ease-in-out",
                "border border-transparent hover:border-neon-purple/40"
              )}
            >
              <item.icon
                className={cn(
                  "text-neon-purple mr-3 h-5 w-5 flex-shrink-0",
                  !expanded && "mx-auto"
                )}
              />
              {expanded && <span>{item.name}</span>}
            </a>
          ))}
        </nav>

        {expanded && (
          <div className="px-3 mt-8">
            <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider">
              CONNECTED PLATFORMS
            </h3>
            <div className="mt-2 space-y-1">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center px-2 py-2 text-sm"
                >
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full mr-2",
                      platform.connected ? "bg-green-400" : "bg-muted"
                    )}
                  />
                  <span
                    className={cn(
                      platform.connected 
                        ? "text-foreground" 
                        : "text-muted-foreground"
                    )}
                  >
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex items-center">
          <div
            className={cn(
              "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-neon-purple/20",
              !expanded && "mx-auto"
            )}
          >
            <User className="h-4 w-4 text-neon-purple" />
          </div>
          {expanded && (
            <div className="ml-3">
              <p className="text-sm font-medium">Alex Johnson</p>
              <p className="text-xs text-muted-foreground">Premium Plan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
