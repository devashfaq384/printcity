import { useState } from "react";

function App() {
  const [shape, setShape] = useState("rectangle");

  const handleShapeChange = (newShape) => {
    setShape(newShape);
  };

  let divClass = "w-32 h-16 rounded";
  if (shape === "round") {
    divClass = "w-32 h-32 rounded-full";
  } else if (shape === "rectangle-horizontal") {
    divClass = "w-64 h-16 rounded-r";
  } else if (shape === "rectangle-vertical") {
    divClass = "w-32 h-32 rounded-t";
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={`${divClass} bg-red-600 `}></div>
      <div className="flex space-x-4 mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleShapeChange("rectangle-horizontal")}
        >
          Rectangle Horizontal
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleShapeChange("rectangle-vertical")}
        >
          Rectangle Vertical
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleShapeChange("round")}
        >
          Round
        </button>
      </div>
    </div>
  );
}

export default App;
