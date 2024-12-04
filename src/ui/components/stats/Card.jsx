import { cn } from "$utils/cn"
import React from "react"
import Counter from "./TextTicker"

function StatsCard({ text, number, odd, classname = "" }) {
  const NumberStyles = "text-4xl md:text-8xl py-8"
  const padNtxt = "px-4 py-4 text-2xl md:text-4xl rounded-xl"

  return (
    <div className={cn("relative grid h-fit grid-flow-row gap-1", classname)}>
      <div
        className={cn(
          "w-full bg-[#131313] text-center font-semibold uppercase tracking-wider",
          padNtxt,
          `${odd ? NumberStyles : ""}`,
        )}
      >
        {odd ? <Counter value={Number(number)} /> : text}
      </div>

      <div
        className={cn(
          "relative w-full bg-[#131313] text-center font-semibold uppercase tracking-wider",
          padNtxt,
          `${odd ? "" : NumberStyles}`,
        )}
      >
        {/* divider */}
        <div className="-translate-y-2/3 -translate-x-1/2 absolute top-0 left-1/2 z-1 h-2 w-2/3 bg-[#131313] px-3" />

        {odd ? text : <Counter value={Number(number)} />}
      </div>
    </div>
  )
}

export default StatsCard
