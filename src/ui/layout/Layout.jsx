import React from "react"

import { Outlet } from "react-router-dom"

import { Analytics } from "@vercel/analytics/react"
import Navbar from "$components/Navbar"
import navList from "$utils/NavList"
import Footer from "$components/Footer"
function Layout() {
  return (
    <>
      <section className="grid grid-rows-[1fr_auto] min-h-svh overflow-x-hidden">
        <Navbar navItems={navList} className={"rounded-[7px] uppercase"} />
        <Outlet />
        <Footer />
      </section>
      <Analytics />
    </>
  )
}

export default Layout
