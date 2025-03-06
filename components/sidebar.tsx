"use client";

import { setToggle } from "@/lib/redux/slices/uiSlice";
import { RootState } from "@/lib/redux/store";
import { MENU } from "@/lib/data";
import { PROFILE } from "@/lib/data/profile";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./ui/modal";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const src = PROFILE.avatar;
  const pathname = usePathname();
  const ui = useSelector((state: RootState) => state.ui.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname) {
      !dispatch(setToggle(false));
    }
  }, [pathname, dispatch]);

  return (
    <>
      {open && <Modal imgSrc={src} image onClose={() => setOpen(false)} />}
      <aside
        className={`fixed left-0 top-0 z-40 h-svh border-r border-cborder w-72 bg-background transition-all ${
          ui ? "max-md:-left-full" : "max-md:left-0"
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="relative">
            <button
              className="bg-foreground text-background p-1 rounded-full absolute right-0 top-0 sm:hidden"
              onClick={() => dispatch(setToggle(false))}
            >
              <X className="w-4 h-4" />
            </button>
            <Image
              loader={() => src}
              alt="avatar"
              src={src}
              className="rounded-full cursor-pointer"
              width={64}
              height={64}
              onClick={() => setOpen(true)}
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-foreground text-xl font-bold">
              {PROFILE.sureName}
            </h1>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
              {PROFILE.statusOne}
            </p>
          </div>
          <nav className="space-y-4">
            <ul className="font-bold text-xs">MENU</ul>
            <ul className="space-y-2">
              {MENU.map((item, i) => (
                <li className="block" key={i}>
                  <Link
                    href={item?.href}
                    className={`flex gap-3 group items-center text-sm w-full p-3 rounded-md hover:bg-foreground transition ${
                      pathname === item.href && "bg-foreground"
                    }`}
                  >
                    <item.icon
                      className={`h-4 w-4 group-hover:text-background ${
                        pathname === item.href && "text-background"
                      }`}
                    />
                    <span
                      className={`group-hover:translate-x-1 transition-transform duration-300 group-hover:text-background ${
                        pathname === item.href && "text-background"
                      }`}
                    >
                      {item?.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="font-bold text-xs">SOCIALS</ul>
            <ul className="space-y-2">
              {PROFILE.socials.map((item, i) => (
                <li className="block" key={i}>
                  <Link
                    target="_blank"
                    href={item?.href}
                    className="flex gap-3 group items-center text-sm w-full p-3 rounded-md hover:bg-foreground transition"
                  >
                    <item.icon className="h-4 w-4 group-hover:text-background" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 text-foreground group-hover:text-background">
                      {item?.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
