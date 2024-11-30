import { cn } from "$lib/cn";
import React from "react";

const Button = ({ text, classname,textColor }) => {
  return (
    <div className={cn("group relative w-ful", classname)}>
      
      <button
        type="button"
        className="relative inline-block cursor-pointer rounded-md p-px font-semibold shadow-2xl shadow-zinc-900 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 w-full text-center"
      >
        <span
          className="absolute inset-0 rounded-md bg-gradient-to-r from-black-russian-200 to-rose-700 p-[2px] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
        />
        <span className="relative z-10 block rounded-md border border-black-russian-50/20 bg-black-russian-950/10 px-6 py-3 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:bg-black-russian-950/90">
          <div className="relative z-10 flex items-center space-x-2 justify-center">
            <span className={cn("transition-all duration-500 ease-in-out group-hover:tracking-wide",textColor)}>
              {text}
            </span>
          </div>
        </span>
      </button>
    </div>
  );
};

export default Button;
