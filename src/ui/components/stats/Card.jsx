import { cn } from "$lib/cn";
import React from "react";
import Dot from "../Dot";
import Text from "./Text";

function StatsCard(stats,{ classname }) {
  return (
    <div
      className={cn(
        "relative grid grid-flow-row place-items-center gap-0.5",
        classname
      )}
    >
      <Text text={stats.text} />

      <div className="absolute w-2/3 bg-emerald-500 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 h-3">
        <Dot classname={"left-0 -translate-x-1/2"} />
        <Dot classname={"right-0 translate-x-1/2"} />
      </div>

      <Text text={stats.number} />
    </div>
  );
}

export default StatsCard;
