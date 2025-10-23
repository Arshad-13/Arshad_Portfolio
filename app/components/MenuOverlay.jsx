import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onNavigate }) => {
  return (
    <div className="glass-panel mx-4 mt-4 space-y-6 rounded-3xl border border-white/10 px-6 py-8 text-center shadow-[0_24px_60px_rgba(8,8,15,0.55)]">
      <ul className="flex flex-col items-center justify-center space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} onClick={onNavigate} />
          </li>
        ))}
      </ul>
      <Link
        href="#contact"
        onClick={onNavigate}
        className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-[#8E2DE2] to-[#F948B7] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_20px_rgba(249,72,183,0.45)]"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default MenuOverlay;
