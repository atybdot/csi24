import React from "react"

import { Outlet } from "react-router-dom"

import Navbar from "$components/Navbar"
import navList from "$utils/NavList"
import Footer from "$components/Footer"
function Layout() {
  return (
    <section className="grid grid-rows-[1fr_auto_auto] min-h-svh">
      <Navbar navItems={navList} className={"rounded-[7px] uppercase"} />
      <Outlet />
      <Footer />
    </section>
  )
}

export default Layout
