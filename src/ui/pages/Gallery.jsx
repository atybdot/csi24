import React from "react";
import { BentoGrid, BentoGridItem } from "$components/stats/Bento.jsx";
import items from "$utils/GallList.jsx";

const Gallery = () => {
  return (
    (<BentoGrid className="pt-36 pr-5 pl-5 max-w-5xl mx-auto md:auto-rows-[20rem] border">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          className={item.className}
          img={item.img}
        />
      ))}
    </BentoGrid>)
  );
}

export default Gallery