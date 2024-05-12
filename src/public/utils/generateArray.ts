const MAX_SIZE = 20;

export function generateRandomArray(size: number) {
  if (size > MAX_SIZE) return;

  let arr = [];
  for (let i = 0; i < size; i++) {
    let randomNum = Math.floor(Math.random() * size);
    arr.push(randomNum);
  }

  return arr;
}

export function generateMostlySortedArray(size: number) {
  if (size > MAX_SIZE) return;

  let arr = [];
  for (let i = 0; i < size; i++) {
    let randomNum = Math.floor(Math.random() * size);
    arr.push(randomNum);
  }
  arr.sort();

  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

  return arr;
}
