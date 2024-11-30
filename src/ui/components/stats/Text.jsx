import { cn } from '$lib/cn'
import React from 'react'

function StatCardText({classname,text}) {
  return (
    <div className={cn("w-full font-bold text-4xl capitalize rounded-md px-10 py-12 text-center bg-emerald-500",classname)}>
        {text}
      </div>
  )
}

export default StatCardText