function compare(
  a: number,
  b: number,
  arr: number[]
): ["compare", number, number, number[]] {
  return ["compare", a, b, arr];
}
function swap(
  a: number,
  b: number,
  arr: number[]
): ["swap", number, number, number[]] {
  return ["swap", a, b, arr];
}

export function* bubbleSort(
  from: number,
  to: number,
  arr: number[]
): Generator<["swap" | "compare", number, number, number[]], void, number> {
  let swapped;
  do {
    swapped = false;
    to -= 1;
    for (let j = from; j < to; j++) {
      if ((yield compare(j, j + 1, [])) > 0) {
        yield swap(j, j + 1, []);
        swapped = true;
      }
    }
  } while (swapped);
}

export function* cocktailSort(
  from: number,
  to: number,
  arr: number[]
): Generator<["swap" | "compare", number, number, number[]], void, number> {
  let swapped;
  do {
    swapped = false;
    to -= 1;
    for (let j = from; j < to; j++) {
      if ((yield compare(j, j + 1, [])) > 0) {
        yield swap(j, j + 1, []);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
    swapped = false;
    from += 1;
    for (let j = to - 1; j >= from; j--) {
      if ((yield compare(j, j - 1, [])) < 0) {
        yield swap(j, j - 1, []);
        swapped = true;
      }
    }
  } while (swapped);
}

export function* quickSort(
  from: number,
  to: number,
  arr: number[]
): Generator<["swap" | "compare", number, number, number[]], void, number> {
  if (to - from <= 1) {
    return;
  }
  const pivot = to - 1;
  let i = from;
  for (let j = from; j < to; j++) {
    if ((yield compare(j, pivot, [])) < 0) {
      yield swap(i, j, []);
      i++;
    }
  }
  yield swap(i, pivot, []);
  yield* quickSort(from, i, []);
  yield* quickSort(i + 1, to, []);
}

export function* mergeSort(
  from: number,
  to: number,
  arr: number[]
): Generator<["swap" | "compare", number, number, number[]], void, number> {
  if (to - from <= 1) {
    return;
  }
  const mid = Math.floor((from + to) / 2);
  yield* mergeSort(from, mid, arr);
  yield* mergeSort(mid, to, arr);
  let i = from;
  let j = mid;
  while (i < j && j < to) {
    if ((yield compare(i, j, [])) > 0) {
      arr.splice(i, 0, arr.splice(j, 1)[0]);
      j++;
    }
    i++;
  }
}
