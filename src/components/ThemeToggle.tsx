
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="hover:bg-muted transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-neon-cyan transition-colors" />
      ) : (
        <Moon className="h-5 w-5 transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
