"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Experience",
        path: "#experience"
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => setNavbarOpen((prev) => !prev);
    const handleNavigate = () => setNavbarOpen(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-40">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="relative mt-4 flex items-center justify-between rounded-full border border-white/10 bg-[#0B0B11]/70 px-5 py-3 shadow-[0_20px_60px_rgba(8,8,15,0.45)] backdrop-blur-xl">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="gradient-text text-xl font-semibold tracking-[0.22em] uppercase">
                            Arshad<span className="text-slate-400 font-bold text-3xl">.</span>
                        </span>
                    </Link>

                    <div className="hidden items-center gap-4 md:flex">
                        <ul className="flex items-center gap-2">
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="#contact"
                            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/90 transition hover:border-transparent hover:bg-[linear-gradient(90deg,#8E2DE2,#F948B7)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F948B7]/60 focus:ring-offset-2 focus:ring-offset-[#0A0A0F]"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <button
                        type="button"
                        aria-expanded={navbarOpen}
                        aria-label="Toggle navigation"
                        onClick={handleToggle}
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:border-white/30 hover:text-white md:hidden"
                    >
                        {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </button>

                    <span className="pointer-events-none absolute inset-x-10 -bottom-px h-px bg-[linear-gradient(90deg,rgba(142,45,226,0.3),rgba(249,72,183,0.5),rgba(0,255,255,0.25))]" />
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} onNavigate={handleNavigate} /> : null}
        </nav>
    );
};

export default Navbar;
