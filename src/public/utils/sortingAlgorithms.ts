export function bubbleSort(arr: number[]) {
  let newArr = [...arr];
  let swaps = [];
  for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        var temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
        swaps.push([j, j + 1]);
      }
    }
  }

  return swaps;
}
