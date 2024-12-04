import StatsCard from "$components/stats/Card"
import isOdd from "$utils/isOdd"
import statsList from "$utils/StatsList"
import React from "react"

function Stats() {
  return (
    <section id="stats-section">
      <div className="grid h-full w-full items-center gap-3 p-8 text-[#d9d4fa] md:grid-cols-2 lg:grid-cols-3">
        {statsList.map((item, index) => {
          let classes = ""
          if (isOdd(index)) {
            classes += "lg:mt-[39%]"
          }
          if (index === statsList.length - 1) {
            classes += "md:translate-x-1/2 lg:translate-x-0"
          }
          return (
            <StatsCard
              key={index}
              text={item.text}
              number={item.number}
              odd={!isOdd(index)}
              classname={classes}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Stats
