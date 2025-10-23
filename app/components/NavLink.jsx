import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative block px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-white/70 transition duration-200 hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[linear-gradient(90deg,#8E2DE2,#F948B7)] after:transition-all after:duration-300 hover:after:w-full"
        >
            {title}
        </Link>
    )
}

export default NavLink