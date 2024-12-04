import React from 'react'

import Hero from '$ui/blocks/Hero'
import Stats from '$ui/blocks/Stats'
import Intro from '$ui/blocks/Intro'
import FacultySection from './Faculty'

function Home() {
  return (
    <>
    <Hero/>
    <Intro/>
    <FacultySection/>
    <Stats/>
    </>

  )
}

export default Home