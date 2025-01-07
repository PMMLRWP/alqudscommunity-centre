"use client";
import Link from "next/link";
import { navItems } from "@/constants/nav";
import { usePathname } from "next/navigation";
import { RiRobot2Line } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <nav className="mt-6 hidden items-center gap-10 text-base font-medium tablet_lg:flex">
      {navItems.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          aria-label={`${nav.name}`}
          className={`${pathName === nav.link ? "nav nav-active" : "nav"}`}
        >
          {nav.name}
        </Link>
      ))}
      <Link
        // href="https://pana-agent.vercel.app/"
        href=""
        target="_blank"
        aria-label="ChatBot"
        className={`${
          // pathName === "https://pana-agent.vercel.app/"
          pathName === ""
            ? "nav nav-active"
            : "nav"
        }`}
      >
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#0d8f5b] to-accent bg-clip-text text-accent text-transparent">
          <RiRobot2Line className="text-lg text-emerald-500" />
          <span className="font-semibold">ChatBot</span>
          <IoMdChatbubbles className="text-emerald-500" />
        </div>
      </Link>
    </nav>
  );
};

export default NavLinks;
