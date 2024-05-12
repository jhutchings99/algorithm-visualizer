"use client";

import { generateRandomArray } from "@/utils/generateArray";
import { bubbleSort } from "@/utils/sortingAlgorithms";
// import { bubbleSort } from "@/utils/sortingAlgorithms";
import { useEffect, useState } from "react";

interface ArrayVisualizerProps {
  arr: number[];
}

function BoxRepresentation({ arr }: ArrayVisualizerProps) {
  return (
    <div className="flex">
      {arr.map((num, index) => (
        <div key={index} className="flex flex-col justify-end">
          <div
            className="w-16 bg-purpleSecondary border"
            style={{
              height: num * 20,
            }}
          ></div>
          <div className="h-16 w-16 text-xl border flex items-center justify-center">
            {num}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ArrayVisualizer({ arr }: ArrayVisualizerProps) {
  const [array, setArray] = useState(arr);

  const handleStartSort = async (event: any) => {
    switch (event.detail) {
      case "bubble-sort":
        let swaps = bubbleSort(array);
        for (let swap of swaps) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          let temp = array[swap[0]];
          array[swap[0]] = array[swap[1]];
          array[swap[1]] = temp;
          setArray([...array]);
        }
        break;
      default:
        console.log("not found");
    }
  };

  const handleRandomizeArray = () => {
    let newArr = generateRandomArray(10);
    if (!newArr) return;

    setArray(newArr);
  };

  useEffect(() => {
    document.addEventListener("startSort", handleStartSort);
    document.addEventListener("randomizeArray", handleRandomizeArray);

    return () => {
      document.removeEventListener("startSort", handleStartSort);
      document.removeEventListener("randomizeArray", handleRandomizeArray);
    };
  });

  return (
    <div className="h-[calc(100vh-5rem)] w-[80vw] flex items-center justify-center">
      <BoxRepresentation arr={array} />
      {/* {arr.map((num, index) => (
        <p key={index}>{num}</p>
      ))} */}
    </div>
  );
}
