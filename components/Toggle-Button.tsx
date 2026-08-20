"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from '@base-ui/react';

const Toggle = () => {
    const {theme,setTheme}=useTheme();

  return (
    <div className={`border border-solid flex items-center justify-center p-1 rounded-full ${theme==="dark"?"border-[#2ED8CF]":"border-black"}`}>
        <Button
          className={'cursor-pointer'}
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