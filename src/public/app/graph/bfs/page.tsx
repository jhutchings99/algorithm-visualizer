import ArrayVisualizer from "@/components/array-visualizer";
import MainNavigation from "@/components/main-navigation";
import SortingOptions from "@/components/sorting-options";
import { Separator } from "@/components/ui/separator";
import SortingKey from "@/components/sorting-key";
import GraphVisualizer from "@/components/graph-visualizer";

export default function Bfs() {
  return (
    <div>
      <MainNavigation />
      <div className="flex ">
        <SortingOptions />
        <div className="flex justify-center items-center flex-col relative">
          <div className="w-full">
            <h1 className="text-xl font-bold py-4 text-center">
              Bredth First Search
            </h1>
            <Separator />
            <div className="flex">{/* <SortingKey /> */}</div>
          </div>

          <GraphVisualizer algorithmStr="bfs" />
        </div>
      </div>
    </div>
  );
}
