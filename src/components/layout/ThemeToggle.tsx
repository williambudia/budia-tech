"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle(
        "dark",
        storedTheme === "dark"
      );
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const systemTheme: Theme = prefersDark ? "dark" : "light";
    setTheme(systemTheme);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full w-10 h-10 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform rotate-0 scale-100 text-amber-500" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform rotate-0 scale-100 text-primary" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
