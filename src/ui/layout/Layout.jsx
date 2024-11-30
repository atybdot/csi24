import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { LuX } from "react-icons/lu";

import { navItem } from "../../utils/NavList";
import SplineComp from "../components/SplineComp";

function Layout() {
  return (
    <section className="grid grid-rows-[1fr_auto_auto] min-h-svh">
      <Navbar navItems={navItem} className={"rounded-[7px] uppercase"} />

      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
