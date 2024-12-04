import { cn } from "$utils/cn";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 border h-fit ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({ className, img }) => {
    return (
      <div
        className={cn(
          "hover:scale-[1.03] min-w-72 rounded-xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent",
          className
        )}
      >
        <img
          className="transition duration-500 w-full h-full object-cover"
          src={img}
          alt=""
        />
      </div>
    );
  };
  
