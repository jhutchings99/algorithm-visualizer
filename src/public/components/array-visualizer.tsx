"use client";

import {
  generateMostlySortedArray,
  generateRandomArray,
} from "@/utils/generateArray";
import { bubbleSort, cocktailSort, quickSort } from "@/utils/sortingAlgorithms";
import { useEffect, useState } from "react";
import { useSortingVisualizer } from "@/utils/customHooks";

export default function ArrayVisualizer({
  arr,
  algorithmStr,
}: {
  arr: number[];
  algorithmStr: string;
}) {
  const [algorithm, setAlgoritm] = useState(() => bubbleSort);

  useEffect(() => {
    if (algorithmStr === "bubbleSort") {
      console.log("setting bub");
      setAlgoritm(() => bubbleSort);
    } else if (algorithmStr === "cocktailSort") {
      console.log("setting coc");

      setAlgoritm(() => cocktailSort);
    } else if (algorithmStr === "quickSort") {
      console.log("setting quick");

      setAlgoritm(() => quickSort);
    }
  }, [algorithmStr]);

  const [swapDelay, setSwapDelay] = useState<number>(2.5 * 1000);
  const [array, setArray] = useState(arr);
  const { displayedArray, done, step, reset, barEffects, stats } =
    useSortingVisualizer(array, algorithm);
  const [playing, setPlay] = useState(false);
  useEffect(() => {
    if (!done && playing) {
      let taskId = window.setInterval(() => {
        step();
      }, swapDelay);
      return () => window.clearInterval(taskId);
    }
  }, [done, step, playing, swapDelay]);

  const handlePlayPauseSort = (event: any) => {
    let operation = event.detail;
    if (!operation) return;

    if (operation === "play") {
      setPlay(true);
    } else if (operation === "pause") {
      setPlay(false);
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
    if (newDelay < 100 || newDelay > 5000) return;

    setSwapDelay(newDelay);
  };

  const handleStep = () => {
    step();
  };

  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    document.addEventListener("playPause", handlePlayPauseSort);
    document.addEventListener("step", handleStep);
    document.addEventListener("reset", handleReset);
    document.addEventListener("generateRandomArray", handleGenerateRandomArray);
    document.addEventListener(
      "generateMostlySortedArray",
      handleGenerateMostlySortedArray
    );
    document.addEventListener("setSwapDelay", handleSetSwapDelay);

    return () => {
      document.removeEventListener("playPause", handlePlayPauseSort);
      document.removeEventListener("step", handleStep);
      document.removeEventListener("reset", handleReset);

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
    <div className="h-[calc(100vh-8.8rem)] min-w-[80vw] flex items-center justify-center">
      <div className="flex">
        {displayedArray.map((num, index) => {
          return (
            <div key={index} className="flex flex-col justify-end">
              <div
                className="w-16 border bg-purpleSecondary"
                style={{
                  height: num * 20,
                  backgroundColor: barEffects[index],
                }}
              ></div>
              <div className="h-16 w-16 text-xl border flex items-center justify-center">
                {num}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
