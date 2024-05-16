import ArrayVisualizer from "@/components/array-visualizer";
import MainNavigation from "@/components/main-navigation";
import SortingOptions from "@/components/sorting-options";
import { generateRandomArray } from "@/utils/generateArray";
import { Separator } from "@/components/ui/separator";
import SortingKey from "@/components/sorting-key";

export default function BubbleSort() {
  const arr = generateRandomArray(10);
  if (!arr) return;

  return (
    <div>
      <MainNavigation />
      <div className="flex ">
        <SortingOptions />
        <div className="flex justify-center items-center flex-col ">
          <div className="w-full">
            <h1 className="text-xl font-bold py-4 text-center">Bubble Sort</h1>
            <Separator />
            <SortingKey />
          </div>

          <ArrayVisualizer arr={arr} algorithmStr="bubbleSort" />
        </div>
      </div>
    </div>
  );
}
