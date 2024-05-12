"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { ModeToggle } from "./ui/mode-toggle";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./list-item";

const array: { title: string; href: string; description: string }[] = [
  {
    title: "Bubble Sort",
    href: "/array/bubble-sort",
    description:
      "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
  },
  {
    title: "Quick Sort",
    href: "/array/quick-sort",
    description:
      "A highly efficient sorting algorithm that divides the list into smaller sub-lists and then recursively sorts them.",
  },
  {
    title: "Merge Sort",
    href: "/array/merge-sort",
    description:
      "An efficient, stable sorting algorithm that divides the list into smaller sub-lists, sorts those sub-lists, and then merges them back together.",
  },
  {
    title: "Selection Sort",
    href: "/array/selection-sort",
    description:
      "A simple sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist.",
  },
  {
    title: "Heap Sort",
    href: "/array/heap-sort",
    description:
      "A comparison-based sorting algorithm that uses a binary heap data structure to sort elements.",
  },
];

const stack: { title: string; href: string; description: string }[] = [
  {
    title: "Push",
    href: "/stack/push",
    description: "Adds an element to the top of the stack.",
  },
  {
    title: "Pop",
    href: "/stack/pop",
    description: "Removes and returns the top element from the stack.",
  },
  {
    title: "Peek",
    href: "/stack/peek",
    description: "Returns the top element of the stack without removing it.",
  },
  {
    title: "isEmpty",
    href: "/stack/isempty",
    description: "Checks if the stack is empty.",
  },
  {
    title: "size",
    href: "/stack/size",
    description: "Returns the number of elements in the stack.",
  },
];

const queue: { title: string; href: string; description: string }[] = [
  {
    title: "Enqueue",
    href: "/queue/enqueue",
    description: "Adds an element to the rear of the queue.",
  },
  {
    title: "Dequeue",
    href: "/queue/dequeue",
    description: "Removes and returns the front element of the queue.",
  },
  {
    title: "Peek",
    href: "/queue/peek",
    description: "Returns the front element of the queue without removing it.",
  },
  {
    title: "isEmpty",
    href: "/queue/isempty",
    description: "Checks if the queue is empty.",
  },
  {
    title: "size",
    href: "/queue/size",
    description: "Returns the number of elements in the queue.",
  },
];

const linkedList: { title: string; href: string; description: string }[] = [
  {
    title: "Insertion at Beginning",
    href: "/linkedlist/insert-beginning",
    description: "Inserts a new node at the beginning of the linked list.",
  },
  {
    title: "Insertion at End",
    href: "/linkedlist/insert-end",
    description: "Inserts a new node at the end of the linked list.",
  },
  {
    title: "Insertion at Position",
    href: "/linkedlist/insert-position",
    description:
      "Inserts a new node at a specified position in the linked list.",
  },
  {
    title: "Deletion at Beginning",
    href: "/linkedlist/delete-beginning",
    description: "Deletes the node at the beginning of the linked list.",
  },
  {
    title: "Deletion at End",
    href: "/linkedlist/delete-end",
    description: "Deletes the node at the end of the linked list.",
  },
  {
    title: "Deletion at Position",
    href: "/linkedlist/delete-position",
    description: "Deletes the node at a specified position in the linked list.",
  },
  {
    title: "Traversal",
    href: "/linkedlist/traversal",
    description:
      "Visits each node in the linked list and performs a specific operation.",
  },
  {
    title: "Search",
    href: "/linkedlist/search",
    description:
      "Searches for a node with a specific value in the linked list.",
  },
];

const tree: { title: string; href: string; description: string }[] = [
  {
    title: "Insertion",
    href: "/tree/insert",
    description: "Inserts a new node into the binary tree.",
  },
  {
    title: "Deletion",
    href: "/tree/delete",
    description: "Deletes a node from the binary tree.",
  },
  {
    title: "Traversal",
    href: "/tree/traversal",
    description:
      "Visits each node in the binary tree and performs a specific operation.",
  },
  {
    title: "Search",
    href: "/tree/search",
    description:
      "Searches for a node with a specific value in the binary tree.",
  },
  {
    title: "Height",
    href: "/tree/height",
    description: "Calculates the height of the binary tree.",
  },
];

const graph: { title: string; href: string; description: string }[] = [
  {
    title: "Add Vertex",
    href: "/graph/add-vertex",
    description: "Adds a vertex (node) to the graph.",
  },
  {
    title: "Add Edge",
    href: "/graph/add-edge",
    description: "Adds an edge (connection) between two vertices in the graph.",
  },
  {
    title: "Remove Vertex",
    href: "/graph/remove-vertex",
    description: "Removes a vertex (node) from the graph.",
  },
  {
    title: "Remove Edge",
    href: "/graph/remove-edge",
    description:
      "Removes an edge (connection) between two vertices in the graph.",
  },
  {
    title: "Breadth-First Search (BFS)",
    href: "/graph/bfs",
    description:
      "Finds the shortest path from a starting vertex to all other vertices in the graph using breadth-first search.",
  },
  {
    title: "Depth-First Search (DFS)",
    href: "/graph/dfs",
    description:
      "Traverses or searches through the graph using depth-first search.",
  },
  {
    title: "Dijkstra's Algorithm",
    href: "/graph/dijkstra",
    description:
      "Finds the shortest path from a starting vertex to all other vertices in the graph with non-negative edge weights.",
  },
  {
    title: "Bellman-Ford Algorithm",
    href: "/graph/bellman-ford",
    description:
      "Finds the shortest path from a starting vertex to all other vertices in the graph, which may have negative edge weights.",
  },
];

const hashTable: { title: string; href: string; description: string }[] = [
  {
    title: "Insertion",
    href: "/hashtable/insert",
    description: "Inserts a key-value pair into the hash table.",
  },
  {
    title: "Deletion",
    href: "/hashtable/delete",
    description: "Deletes a key-value pair from the hash table.",
  },
  {
    title: "Search",
    href: "/hashtable/search",
    description:
      "Searches for a key in the hash table and returns its corresponding value.",
  },
  {
    title: "Collision Handling",
    href: "/hashtable/collision",
    description:
      "Handles collisions that occur when two keys hash to the same index.",
  },
];

export default function MainNavigation() {
  return (
    <NavigationMenu className="border-b backdrop-blur-sm">
      <NavigationMenuList className="flex justify-between w-screen p-4">
        <div className="flex gap-2 items-center">
          <Image
            src={Logo}
            alt="Visualgorithms logo"
            className="w-auto h-8"
            priority
          ></Image>
          <NavigationMenuItem>
            <Link href="/">Visualgorithms</Link>
          </NavigationMenuItem>
        </div>
        <div className="flex gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Array
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {array.map((algorithm) => (
                  <ListItem
                    key={algorithm.title}
                    title={algorithm.title}
                    href={algorithm.href}
                  >
                    {algorithm.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Stack
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {stack.map((algorithm) => (
                  <ListItem
                    key={algorithm.title}
                    title={algorithm.title}
                    href={algorithm.href}
                  >
                    {algorithm.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Queue
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {queue.map((algorithm) => (
                  <ListItem
                    key={algorithm.title}
                    title={algorithm.title}
                    href={algorithm.href}
                  >
                    {algorithm.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Linked List
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {linkedList.map((algorithm) => (
                  <ListItem
                    key={algorithm.title}
                    title={algorithm.title}
                    href={algorithm.href}
                  >
                    {algorithm.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Tree
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {tree.map((algorithm) => (
                  <ListItem
                    key={algorithm.title}
                    title={algorithm.title}
                    href={algorithm.href}
                  >
                    {algorithm.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Graph
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {graph.map((algorithm) => (
                  <ListItem
                    key={algorithm.title}
                    title={algorithm.title}
                    href={algorithm.href}
                  >
                    {algorithm.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Hash Table
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {hashTable.map((algorithm) => (
                  <ListItem
                    key={algorithm.title}
                    title={algorithm.title}
                    href={algorithm.href}
                  >
                    {algorithm.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
