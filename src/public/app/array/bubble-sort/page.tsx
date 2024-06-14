import ArrayVisualizer from "@/components/array-visualizer";
import MainNavigation from "@/components/main-navigation";
import SortingOptions from "@/components/sorting-options";
import { generateRandomArray } from "@/utils/generateArray";
import { Separator } from "@/components/ui/separator";
import SortingKey from "@/components/sorting-key";
import InformationPane from "@/components/information-pane";

export default function BubbleSort() {
  const arr = generateRandomArray(10);
  if (!arr) return;

  return (
    <div>
      <MainNavigation />
      <div className="flex ">
        <SortingOptions />
        <div className="flex justify-center items-center flex-col relative">
          <div className="w-full">
            <h1 className="text-xl font-bold py-4 text-center">Bubble Sort</h1>
            <Separator />
            <div className="flex">
              <InformationPane />
              <SortingKey />
            </div>
          </div>

          <ArrayVisualizer arr={arr} algorithmStr="bubbleSort" />
        </div>
      </div>
    </div>
  );
}
