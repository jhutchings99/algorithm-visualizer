"use client";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

function startSort(sortAlgo: string) {
  const event = new CustomEvent("startSort", { detail: sortAlgo });
  document.dispatchEvent(event);
}

function randomizeArray() {
  const event = new Event("randomizeArray");
  document.dispatchEvent(event);
}

export default function SortingOptions() {
  return (
    <div className="h-[calc(100vh-5rem)] w-[25vw] border-r">
      <h1>Options</h1>
      <button
        onClick={() => {
          startSort("bubble-sort");
        }}
      >
        Testing stuff
      </button>
      <Button
        variant="outline"
        onClick={(e) => {
          e.preventDefault();
          randomizeArray();
        }}
      >
        Button
      </Button>

      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  );
}
