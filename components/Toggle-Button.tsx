"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from '@base-ui/react';

const Toggle = () => {
    const {theme,setTheme}=useTheme();

  return (
    <div >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    </div>
  )
}

export default Toggle