export const heapPermute = (array: any[], n: number) => {
  n = n || array.length; // set n default to array.length
  const permutations = [];
  if (n === 1) {
    permutations.push([...array]);
  } else {
    for (let i = 1; i <= n; i++) {
      heapPermute(array, n - 1).forEach((perm) => permutations.push(perm));
      let j;

      if (n % 2) {
        j = 1;
      } else {
        j = i;
      }
      [array[n - 1], array[j - 1]] = [array[j - 1], array[n - 1]]; // swap
    }
  }
  return permutations;
};
