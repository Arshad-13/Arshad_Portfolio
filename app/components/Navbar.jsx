"use client";

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconInfoCircle, IconBriefcase } from "@tabler/icons-react";

const navItems = [
    {
        name: "About",
        link: "#about",
        icon: <IconInfoCircle className="h-4 w-4 text-white/80" />,
    },
    {
        name: "Experience",
        link: "#experience",
        icon: <IconBriefcase className="h-4 w-4 text-white/80" />,
    }
];

const Navbar = () => {
    return (
        <FloatingNav navItems={navItems} />
    );
};

export default Navbar;
