"use client";

import {
  generateMostlySortedArray,
  generateRandomArray,
} from "@/utils/generateArray";
import { bubbleSort } from "@/utils/sortingAlgorithms";
import { useEffect, useState } from "react";

interface ArrayVisualizerProps {
  arr: number[];
}

function BoxRepresentation({
  arr,
  swaps,
}: ArrayVisualizerProps & { swaps: number[][] }) {
  return (
    <div className="flex">
      {arr.map((num, index) => {
        const isSwapped = swaps.some(([i, j]) => i === index || j === index);
        const backgroundColor = isSwapped
          ? swaps[0][0] === index
            ? "bg-yellow-300"
            : "bg-blue-300"
          : "bg-purpleSecondary";

        return (
          <div key={index} className="flex flex-col justify-end">
            <div
              className={`w-16 border ${backgroundColor}`}
              style={{
                height: num * 20,
              }}
            ></div>
            <div className="h-16 w-16 text-xl border flex items-center justify-center">
              {num}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ArrayVisualizer({ arr }: ArrayVisualizerProps) {
  const [array, setArray] = useState(arr);
  const [swaps, setSwaps] = useState<number[][]>([]);
  const [swapDelay, setSwapDelay] = useState<number>(2.5 * 1000);

  const handleStartSort = async (event: any) => {
    switch (event.detail) {
      case "bubble-sort":
        let swaps = bubbleSort(array);
        for (let swap of swaps) {
          await new Promise((resolve) => setTimeout(resolve, swapDelay));
          let temp = array[swap[0]];
          array[swap[0]] = array[swap[1]];
          array[swap[1]] = temp;
          setArray([...array]);
          setSwaps([swap]);
        }
        setSwaps([]);

        break;
      default:
        console.log("not found");
    }
  };

  const handleGenerateRandomArray = (event: any) => {
    let newArr = generateRandomArray(event.detail);
    if (!newArr) return;

    setArray(newArr);
  };

  const handleGenerateMostlySortedArray = (event: any) => {
    let newArr = generateMostlySortedArray(event.detail);
    if (!newArr) return;

    setArray(newArr);
  };
  const handleSetSwapDelay = (event: any) => {
    let newDelay = event.detail;
    if (newDelay < 0.5 || newDelay > 5) return;

    // convert ms to seconds
    setSwapDelay(newDelay * 1000);
  };

  useEffect(() => {
    document.addEventListener("startSort", handleStartSort);
    document.addEventListener("generateRandomArray", handleGenerateRandomArray);
    document.addEventListener(
      "generateMostlySortedArray",
      handleGenerateMostlySortedArray
    );
    document.addEventListener("setSwapDelay", handleSetSwapDelay);

    return () => {
      document.removeEventListener("startSort", handleStartSort);
      document.removeEventListener(
        "generateRandomArray",
        handleGenerateRandomArray
      );
      document.removeEventListener(
        "generateMostlySortedArray",
        handleGenerateMostlySortedArray
      );
      document.removeEventListener("setSwapDelay", handleSetSwapDelay);
    };
  });

  return (
    <div className="h-[calc(100vh-8.8rem)] w-[80vw] flex items-center justify-center">
      <BoxRepresentation arr={array} swaps={swaps} />
    </div>
  );
}
