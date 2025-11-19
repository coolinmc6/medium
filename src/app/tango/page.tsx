'use client';

import {
  generatePossibleRows,
  generatePossibleBoards,
} from '@/app/tango/tango-helpers';

export default function Tango() {
  console.log(generatePossibleRows());
  console.log(generatePossibleBoards());

  return (
    <div className="p-4 bg-white flex-grow">
      <h1 className="text-3xl text-center">Tango</h1>
      <section></section>
    </div>
  );
}
