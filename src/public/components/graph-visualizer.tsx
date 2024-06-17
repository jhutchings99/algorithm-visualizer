"use client";

import { getLayoutOrPageModule } from "next/dist/server/lib/app-dir-module";
import { useState } from "react";

export default function GraphVisualizer({
  algorithmStr,
}: {
  algorithmStr: string;
}) {
  const ALLOWED_IDS = "ABCDEFGH";

  const [graph, setGraph] = useState([
    {
      id: "A",
      edges: [[0, 2]],
    },
    { id: "B" },
  ]);

  //   const graph = [
  //     {
  //       id: "A",
  //     },
  //     {
  //       id: "B",
  //     },
  //     {
  //       id: "C",
  //     },
  //     {
  //       id: "D",
  //     },
  //     {
  //       id: "E",
  //     },
  //     {
  //       id: "F",
  //     },
  //   ];

  function createNewNode() {
    if (graph.length > 7) return;
    let newNode = {
      id: ALLOWED_IDS[graph.length],
    };
    setGraph([...graph, newNode]);
  }

  function deleteNode() {
    if (graph.length < 3) return;
    let temp = [...graph];
    temp.pop();
    setGraph(temp);
  }

  return (
    <div className="h-[calc(100vh-8.8rem)] min-w-[80vw] flex items-center justify-center">
      <button
        onClick={() => {
          createNewNode();
        }}
      >
        new node
      </button>
      <button
        onClick={() => {
          deleteNode();
        }}
      >
        delete node
      </button>
      <div className="flex flex-wrap w-[25vw] gap-12">
        {graph.map((node, index) => (
          <div
            key={index}
            className="border rounded-full w-24 h-24 flex justify-center items-center"
          >
            {node.id}
          </div>
        ))}
      </div>
    </div>
  );
}
