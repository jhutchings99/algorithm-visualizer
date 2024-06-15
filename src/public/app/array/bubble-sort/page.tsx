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

  const description = `Bubble Sort repeatedly steps through the list, compares adjacent
            elements, and swaps them if they are in the wrong order. This
            continues until the list is sorted`;

  const keyPoits = [
    `Time Complexity: O(n²) in the worst and average cases, O(n) in
  the best case (when the list is already sorted).`,
    `Space Complexity: O(1) (in-place sorting).`,
    `Best Use Case: Small datasets or nearly sorted lists.`,
  ];

  const codeBlocks = [
    `function bubbleSort(arr) {
      let n = arr.length;
      for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              }
          }
      }
      return arr;
  }
  
  console.log(bubbleSort([5, 3, 8, 4, 2]));`,

    `def bubbleSort(arr):
  n = len(arr)
  for i in range(n - 1):
      for j in range(n - i - 1):
          if arr[j] > arr[j + 1]:
              arr[j], arr[j + 1] = arr[j + 1], arr[j]
  return arr

print(bubbleSort([5, 3, 8, 4, 2]))
`,
    `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 4, 2};
        bubbleSort(arr);
        System.out.println(java.util.Arrays.toString(arr));
    }
}
`,
    `#include <iostream>
#include <vector>

void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    std::vector<int> arr = {5, 3, 8, 4, 2};
    bubbleSort(arr);
    for (int num : arr) {
        std::cout << num << " ";
    }
    return 0;
}
`,
    `package main

import (
    "fmt"
)

func bubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}

func main() {
    arr := []int{5, 3, 8, 4, 2}
    bubbleSort(arr)
    fmt.Println(arr)
}
`,
    `fn bubble_sort(arr: &mut [i32]) {
  let n = arr.len();
  for i in 0..n - 1 {
      for j in 0..n - i - 1 {
          if arr[j] > arr[j + 1] {
              arr.swap(j, j + 1);
          }
      }
  }
}

fn main() {
  let mut arr = [5, 3, 8, 4, 2];
  bubble_sort(&mut arr);
  println!("{:?}", arr);
}
`,
  ];

  const languages = ["javascript", "python", "java", "c++", "go", "rust"];

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
              <InformationPane
                description={description}
                keyPoints={keyPoits}
                codeBlocks={codeBlocks}
                languages={languages}
              />
              <SortingKey />
            </div>
          </div>

          <ArrayVisualizer arr={arr} algorithmStr="bubbleSort" />
        </div>
      </div>
    </div>
  );
}
