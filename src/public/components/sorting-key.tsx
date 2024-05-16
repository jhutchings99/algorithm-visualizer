export default function SortingKey() {
  return (
    <div className="absolute flex flex-col gap-1 border rounded-sm p-4 m-4">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-sm bg-ogRed"></div>
        Comparison
      </div>
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-sm bg-ogGreen"></div>
        Swap
      </div>
    </div>
  );
}
