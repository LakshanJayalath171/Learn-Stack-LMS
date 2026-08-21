"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`flex items-center justify-center rounded-full border border-solid p-1 ${
        theme === "dark" ? "border-[#2ED8CF]" : "border-black"
      }`}
    >
      <Button
        type="button"
        size="icon"
        className="cursor-pointer"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </Button>
    </div>
  );
};

export default Toggle;