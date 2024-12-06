import { useState } from "react";
import { GiLockedChest, GiOpenChest } from "react-icons/gi";

type BoxProps = {
  contents: number;
  number: number;
  onClick: () => void;
  open: boolean;
};

export const Box = ({ number, contents, open, onClick }: BoxProps) => {
  return (
    <div
      className="text-[40px] flex flex-col items-center relative text-center p-4 text-amber-500 cursor-pointer select-none"
      onClick={onClick}
    >
      {open ? <GiOpenChest /> : <GiLockedChest />}
      <div className="text-1xl text-black">{number}</div>
      {open ? (
        <div className="text-1xl absolute top-10 left-0 w-full ">
          <span className="bg-slate-300 opacity-80 text-black px-3">
            {contents}
          </span>
        </div>
      ) : null}
    </div>
  );
};
