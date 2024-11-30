import StatsCard from "$components/stats/Card";
import statsList from "$utils/StatsList";
import React from "react";

function Numbers() {
  return (
    <section className="h-fit">
      <div className="flex flex-wrap gap-3 h-fit w-full items-start justify-center text-black-russian-50">
        {statsList.map((item, index) => {
          if (index === 1) {
            return (
              <StatsCard
                classname={"md:mt-[15%]"}
                text={item.text}
                number={item.number}
              />
            );
          }
          return (
            <StatsCard key={index} text={item.text} number={item.number} />
          );
        })}
      </div>
    </section>
  );
}

export default Numbers;
