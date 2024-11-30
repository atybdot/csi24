import React from "react"

import SplineComp from "$components/SplineComp"
import Btn from "$components/Button"

function Hero() {
  return (
    <section
      className="h-[100svh] max-h-svh overflow-x-hidden"
      id="hero-section"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-[44%] left-1/2 flex w-[40svw] items-center justify-evenly text-center font-xanh text-black-russian-50/90 text-xl uppercase tracking-widest sm:w-[25%] md:w-[20%] md:text-2xl lg:w-[18%] font-semibold">
        csi
        <span className="font-light font-xanh text-red-500/80">x</span>
        e-cell
      </div>

      <SplineComp />
      <div className="absolute bottom-[180px] z-40 left-1/2 -translate-x-1/2 grid sm:grid-cols-2 gap-2 place-content-center">
        <Btn text={"Register Now"} classname={"text-black-russian-50"}/>
        <Btn text={"More Info"} classname={"text-black-russian-50/80"} />
      </div>

      <div className="md:1/6 absolute right-0 bottom-0 z-[999] h-14 w-full bg-[hsl(240,100%,8%)] sm:mr-4 sm:w-1/4" />
    </section>
  )
}

export default Hero
