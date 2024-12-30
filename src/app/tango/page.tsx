import { heapPermute } from '@/app/util/helpers';

export default function Tango() {
  const permutations = heapPermute([1, 2, 3, 4, 5], 5);
  console.log(permutations);
  return (
    <div className="p-4 bg-white flex-grow">
      <h1 className="text-3xl text-center">Tango</h1>
      <section></section>
    </div>
  );
}
