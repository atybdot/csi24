import { cn } from '$lib/cn'
import React from 'react'

function Dot({classname}) {
  return (
    <div className={cn("rounded-full p-1 aspect-square h-0.5 bg-black-russian-50 top-1/2 absolute -translate-y-1/2",classname)}/>
  )
}

export default Dot