// "use client";

import ArrayVisualizer from "@/components/array-visualizer";
import CanvasArea from "@/components/canvas-area";
import MainNavigation from "@/components/main-navigation";
import SortingOptions from "@/components/sorting-options";
import {
  generateRandomArray,
  generateMostlySortedArray,
} from "@/utils/generateArray";

export default function BubbleSort() {
  const arr = generateRandomArray(10);
  if (!arr) return;

  return (
    <div>
      <MainNavigation />
      <div className="flex">
        <SortingOptions />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold">Bubble Sort</h1>
          <ArrayVisualizer arr={arr} />
        </div>
        {/* <CanvasArea /> */}
      </div>
    </div>
  );
}
