'use client';

import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconMail,
  IconBrandX,
  IconCode,
  IconTerminal,
} from "@tabler/icons-react";

const GameDock = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300" />
      ),
      href: "https://github.com/Arshad-13",
      target: "_blank",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/arshad-khatib-408637270/",
      target: "_blank",
    },
    {
      title: "LeetCode",
      icon: (
        <IconCode className="h-full w-full text-neutral-300" />
      ),
      href: "https://leetcode.com/u/rationalist_13/",
      target: "_blank",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-300" />
      ),
      href: "#", // Update with your X profile URL
      target: "_blank",
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        items={links}
        desktopClassName="bg-black/50 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        mobileClassName="translate-y-20" // Hide on mobile default or adjust
      />
    </div>
  );
};

export default GameDock;
