import MainNavigation from "@/components/main-navigation";
import ParticlesComponent from "@/components/particle-background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <MainNavigation />
      <ParticlesComponent />

      <div className="mx-52 mt-40 mb-48">
        <h1 className="text-6xl font-bold pb-10">Welcome to Visualgorithms</h1>
        <h2 className="text-4xl font-medium pb-4 text-wrap max-w-[50vw]">
          Dive into Algorithms & Data Structures visually! Explore sorting,
          graph traversal, trees, and more. Perfect for learners and developers
          alike.
        </h2>
        <Button
          variant="outline"
          className="bg-transparent backdrop-blur-sm px-12 py-6 text-xl"
        >
          Learn More
        </Button>
      </div>

      <div className="max-w-screen mx-52">
        <h2 className="text-4xl font-medium pb-4">Featured Algorithms</h2>
        <div className="flex justify-between">
          <Card className="w-[20vw] backdrop-blur-sm bg-transparent">
            <CardHeader>
              <CardTitle>Dijkstra&apos;s</CardTitle>
              <CardDescription>
                A widely used algorithm for finding the shortest path between
                nodes in a graph, particularly in routing and navigation
                applications.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                className="bg-transparent backdrop-blur-sm w-full"
              >
                <Link href="graph/dijkstra">Visualize Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-[20vw] backdrop-blur-sm bg-transparent">
            <CardHeader>
              <CardTitle>Merge Sort</CardTitle>
              <CardDescription>
                A popular sorting algorithm known for its efficiency and
                simplicity, using a divide-and-conquer approach to sort
                elements.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                className="bg-transparent backdrop-blur-sm w-full"
              >
                <Link href="array/merge-sort">Visualize Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-[20vw] backdrop-blur-sm bg-transparent">
            <CardHeader>
              <CardTitle>Bellman-Ford </CardTitle>
              <CardDescription>
                An algorithm used to find the shortest path in a graph with
                negative edge weights, making it useful in scenarios where
                Dijkstra&apos;s algorithm cannot be applied.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                className="bg-transparent backdrop-blur-sm w-full"
              >
                <Link href="graph/bellman-ford">Visualize Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex max-w-screen justify-between py-12">
          <Card className="w-[20vw] backdrop-blur-sm bg-transparent">
            <CardHeader>
              <CardTitle>Prims</CardTitle>
              <CardDescription>
                Used to find the minimum spanning tree of a graph, with
                applications in network design and clustering.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                className="bg-transparent backdrop-blur-sm w-full"
              >
                <Link href="graph/dijkstra">Visualize Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-[20vw] backdrop-blur-sm bg-transparent">
            <CardHeader>
              <CardTitle>Huffman Encoding</CardTitle>
              <CardDescription>
                Huffman encoding compresses data by assigning shorter codes to
                more frequent characters. It&apos;s widely used for its
                simplicity and efficiency in file compression and
                telecommunications.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                className="bg-transparent backdrop-blur-sm w-full"
              >
                <Link href="array/merge-sort">Visualize Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-[20vw] backdrop-blur-sm bg-transparent">
            <CardHeader>
              <CardTitle>Quick Sort</CardTitle>
              <CardDescription>
                An efficient sorting algorithm that uses a divide-and-conquer
                strategy, often outperforming other sorting algorithms in
                practice.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                className="bg-transparent backdrop-blur-sm w-full"
              >
                <Link href="graph/bellman-ford">Visualize Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
