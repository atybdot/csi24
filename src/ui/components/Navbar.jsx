"use client";
import { cn } from "$lib/cn";
import { Link } from "react-router-dom";

const FloatingNav = ({ navItems, className }) => {
  return (
    <section
      id="navbar"
      className={cn(
        "flex w-[60vw] fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] z-[5000] py-2  items-center justify-center space-x-4 rounded-sm backdrop-blur-sm",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem?.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem?.icon}</span>
          <span className="hidden sm:block text-md">{navItem?.name}</span>
        </Link>
      ))}
    </section>
  );
};

export default FloatingNav;