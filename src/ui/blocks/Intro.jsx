import React from "react"
import logoSrc from "$assets/csi-logo.png"
function Intro() {
  return (
    <section className="w-full relative h-svh" id="intro">
      <div className="absolute top-0 left-0 w-full h-full" id="intro-img" />
      <div
        className="absolute top-0 left-0 w-full h-full"
        id="intro-gradient"
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        id="intro-gradient-2"
      />
      <div className="w-full h-full z-50">
        <div className="flex justify-between items-center gap-4 bg-transparent">
          <div className="w-full h-1 bg-black-russian-50/70" />
          <img
            src={logoSrc}
            alt="csi-logo"
            className="aspect-auto h-12 sm:h-16"
          />
          <div className="w-full h-1 bg-black-russian-50/70" />
        </div>
      
        <h1 className="m-auto w-1/2 sm:w-full text-center mt-16 font-semibold sm:text-5xl md:text-6xl text-4xl ">
          Computer Society of India
        </h1>
        <h3 className="m-auto text-center mt-10 font-semibold sm:text-xl md:text-3xl text-xl">
          Where Tech meets innovation
        </h3>
        <p className="m-auto w-1/2 mt-48 text-center capitalize sm:text-lg md:text-xl text-md">
          Connect to a vibrant community of tech enthusiasts, fostering
          innovation, collaboration, and skill development for a dynamic digital
          future.
        </p>
    
      </div>
    </section>
  )
}

export default Intro
