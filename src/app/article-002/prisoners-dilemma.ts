export class Room {
  boxes: number[];
  size: number;
  loops: number[][];
  largestLoop: number;

  constructor(size: number) {
    this.size = size;

    this.boxes = new Array(size)
      .fill(0)
      .map((_, index) => index + 1)
      .sort(() => Math.random() - 0.5);

    this.loops = this.findLoops();
    this.largestLoop = Math.max(...this.loops.map((loop) => loop.length));
  }

  findLoops(): number[][] {
    const loops: number[][] = [];
    const visited = new Set<number>();

    for (let i = 1; i <= this.size; i++) {
      if (!visited.has(i)) {
        const loop: number[] = [];
        let current = i;

        while (!visited.has(current)) {
          visited.add(current);
          loop.push(current);
          current = this.boxes[current - 1];
        }

        loops.push(loop);
      }
    }

    return loops;
  }
}

export const runIterations = (iterations: number, size: number) => {
  const stats = {
    totalLoops: 0,
    largestLoop: 0,
    loopSizes: [] as number[],
    percentLoopsHalfOrLess: 0,
  };

  for (let i = 0; i < iterations; i++) {
    const room = new Room(size);
    stats.totalLoops += room.loops.length;
    stats.loopSizes.push(room.largestLoop);
  }
  stats.largestLoop = Math.max(...stats.loopSizes);
  stats.percentLoopsHalfOrLess =
    stats.loopSizes.filter((loopSize) => loopSize <= size / 2).length /
    iterations;

  return stats;
};
