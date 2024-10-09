"use client";

import React from "react";
import { Switch } from "./ui/switch-ui";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { setToggle } from "@/app/redux/slices/uiSlice";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const dispatch = useDispatch();

  return (
    <header
      className='flex md:justify-end justify-between'
    >
      <button className="md:hidden" onClick={() => dispatch(setToggle(true))}>
        <Menu />
      </button>
      <div className="relative h-6">
        <Switch onCheckedChange={toggle} />
        {theme === "dark" && (
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2">
            <Moon className="h-3 w-3" />
          </div>
        )}
        {theme === "light" && (
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
            <Sun className="h-3 w-3" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
