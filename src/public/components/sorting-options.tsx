"use client";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

function playPauseSort(operation: string) {
  const event = new CustomEvent("playPause", { detail: operation });
  document.dispatchEvent(event);
}

function generateRandomArray(size: number) {
  const event = new CustomEvent("generateRandomArray", { detail: size });
  document.dispatchEvent(event);
}

function generateMostlySortedArray(size: number) {
  const event = new CustomEvent("generateMostlySortedArray", { detail: size });
  document.dispatchEvent(event);
}

function setSwapDelay(delay: number) {
  const event = new CustomEvent("setSwapDelay", { detail: delay });
  document.dispatchEvent(event);
}

function playStep() {
  const event = new Event("step");
  document.dispatchEvent(event);
}

function resetArray() {
  const event = new Event("reset");
  document.dispatchEvent(event);
}

export default function SortingOptions() {
  const [arraySize, setArraySize] = useState(10);
  const [playing, setPlaying] = useState(false);
  const ARRAY_SIZE_MIN = 1;
  const ARRAY_SIZE_MAX = 20;
  const SORT_SPEED_MIN_MS = 100;
  const SORT_SPEED_MAX_MS = 5000;

  const handleSortFinished = () => {
    setPlaying(false);
  };

  useEffect(() => {
    document.addEventListener("setSortFinished", handleSortFinished);

    return () => {
      document.removeEventListener("setSortFinished", handleSortFinished);
    };
  });

  return (
    <div className="h-[calc(100vh-5rem)] w-[25vw] border-r">
      <h1 className="text-xl font-bold py-4 text-center">Sorting Options</h1>
      <Separator />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Label>Generate Random Array</Label>
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              generateRandomArray(arraySize);
            }}
          >
            Generate
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Generate Mostly Sorted Array</Label>
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              generateMostlySortedArray(arraySize);
            }}
          >
            Generate
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Array Size</Label>
          <Slider
            defaultValue={[ARRAY_SIZE_MAX / 2]}
            min={ARRAY_SIZE_MIN}
            max={ARRAY_SIZE_MAX}
            step={1}
            onValueChange={(value: number[]) => {
              setArraySize(value[0]);
              setPlaying(false);
              playPauseSort("pause");
              generateRandomArray(value[0]);
            }}
          />
          <div className="flex justify-between">
            <Label>{ARRAY_SIZE_MIN}</Label>
            <Label>{ARRAY_SIZE_MAX / 2}</Label>
            <Label>{ARRAY_SIZE_MAX}</Label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Delay Between Swaps (seconds)</Label>
          <Slider
            defaultValue={[SORT_SPEED_MAX_MS / 2]}
            min={SORT_SPEED_MIN_MS}
            max={SORT_SPEED_MAX_MS}
            step={0.5}
            onValueChange={(value: number[]) => {
              setSwapDelay(value[0]);
            }}
          />
          <div className="flex justify-between">
            <Label>{SORT_SPEED_MIN_MS}ms</Label>
            <Label>{SORT_SPEED_MAX_MS / 2}ms</Label>
            <Label>{SORT_SPEED_MAX_MS}ms</Label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Reset Array</Label>
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              setPlaying(false);
              resetArray();
            }}
          >
            Reset
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Step</Label>
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              playStep();
            }}
          >
            Step
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Sort Array</Label>
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              setPlaying(!playing);
              playPauseSort(playing ? "pause" : "play");
            }}
          >
            {playing ? "Pause" : "Play"}
          </Button>
        </div>
      </div>
    </div>
  );
}
