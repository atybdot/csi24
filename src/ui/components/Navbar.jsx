import { cn } from "$utils/cn"
import { NavLink } from "react-router-dom"

const FloatingNav = ({ navItems, className }) => {
  return (
    <section
      id="navbar"
      className={cn(
        "flex w-fit px-10 fixed top-10 inset-x-0 mx-auto border border-black-russian-50/20 bg-black-russian/20 z-[1] py-2  items-center justify-center space-x-4 rounded-sm backdrop-blur-sm",
        className,
      )}
    >
      {navItems.map((navItem, idx) => (
        <NavLink
          key={`link=${idx}`}
          to={navItem?.link}
          className={({ isActive }) => {
            return cn(
              "relative items-center flex space-x-1 text-black-russian-50/50 hover:text-black-russian-50 transition-colors duration-300 ease-in-out ",
              isActive ? "text-black-russian-50" : "",
            )
          }}
        >
          <span className="block sm:hidden">{navItem?.icon}</span>
          <span className="hidden sm:block text-md">{navItem?.name}</span>
        </NavLink>
      ))}
    </section>
  )
}

export default FloatingNav
