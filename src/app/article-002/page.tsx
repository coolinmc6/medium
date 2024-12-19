'use client';

import { useState } from 'react';

import { Room, runIterations } from '@/app/article-002/prisoners-problem';
import { Box } from '@/app/article-002/Box';

export default function ArticleTwo() {
  const [room] = useState(() => new Room(100));
  const [boolArray, setBoolArray] = useState<boolean[]>(Array(100).fill(false));

  const toggleValue = (index: number) => {
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
            contents={number}
            number={index + 1}
            open={boolArray[index]}
            onClick={() => toggleValue(index)}
          />
        ))}
      </div>
    </div>
  );
}
