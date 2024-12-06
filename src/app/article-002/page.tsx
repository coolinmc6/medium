"use client";

import { useState } from "react";

import { Room, runIterations } from "@/app/article-002/prisoners-dilemma";
import { Box } from "@/app/article-002/Box";

export default function ArticleTwo() {
  const [room, setRoom] = useState(() => new Room(100));
  const [boolArray, setBoolArray] = useState<boolean[]>(
    Array(length).fill(false)
  );

  const toggleValue = (index: number) => {
    console.log(index);
    // setBoolArray((prev) =>
    //   prev.map((value, i) => (i === index ? !value : value))
    // );
    const newArray = [...boolArray];
    newArray[index] = !newArray[index];
    setBoolArray(newArray);
  };
  console.log(room);

  const stats = runIterations(1000, 100);
  console.log(stats);

  return (
    <div className="p-4 bg-white flex-grow">
      <h1 className="text-3xl text-center">100 Prisoners Problem</h1>
      <div className="flex flex-wrap justify-center">
        {room.boxes.map((number, index) => (
          <Box
            key={index + 1}
            number={index + 1}
            contents={number}
            open={boolArray[index]}
            onClick={() => toggleValue(index)}
          />
        ))}
      </div>
    </div>
  );
}
