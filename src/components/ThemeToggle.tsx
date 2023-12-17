"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import Button from "@mui/material/Button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import Autocomplete from "@mui/material/Autocomplete";
import ToggleButton from "@mui/material/ToggleButton";

export function ThemeToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme } = useTheme();
  const [selected, setSelected] = React.useState(false);

  return (
    <div className={className} {...props}>
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
          if (selected) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        {selected ? (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        ) : (
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        )}
      </ToggleButton>
    </div>
  );
}

{
  // <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button>
  //         <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  //         <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  //         <span className="sr-only">Toggle theme</span>
  //         </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent align="end">
  //       <DropdownMenuItem onClick={() => setTheme("light")}>
  //         Light
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("dark")}>
  //         Dark
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme("system")}>
  //         System
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>
}
