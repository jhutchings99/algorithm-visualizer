import ArrayVisualizer from "@/components/array-visualizer";
import MainNavigation from "@/components/main-navigation";
import SortingOptions from "@/components/sorting-options";
import { generateRandomArray } from "@/utils/generateArray";
import { Separator } from "@/components/ui/separator";

export default function BubbleSort() {
  const arr = generateRandomArray(10);
  if (!arr) return;

  return (
    <div>
      <MainNavigation />
      <div className="flex">
        <SortingOptions />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-bold py-4 text-center">Quick Sort</h1>
          <Separator />

          <ArrayVisualizer arr={arr} algorithmStr="quickSort" />
        </div>
      </div>
    </div>
  );
}
