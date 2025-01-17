// import React, { useEffect } from 'react';
// import SimpleWhiteBoard from 'simple-white-board';

// const Banner = () => {
//     useEffect(() => {
//         const canvas = document.getElementById('canvas');

//         if (canvas) {
//             // Set logical size (coordinate system)
//             const logicalWidth = 1200; // Logical canvas width
//             const logicalHeight = 800; // Logical canvas height

//             // Set the physical display size to match
//             canvas.style.width = `${logicalWidth}px`;
//             canvas.style.height = `${logicalHeight}px`;

//             // Set the canvas resolution to match the logical size
//             canvas.width = logicalWidth;
//             canvas.height = logicalHeight;

//             // Initialize SimpleWhiteBoard with the logical size
//             const whiteBoard = new SimpleWhiteBoard(canvas, {
//                 backgroundColor: '#ffffff',
//                 width: logicalWidth,
//                 height: logicalHeight,
//             });

//             // Debug: Log the canvas size
//             console.log('Canvas initialized with:', {
//                 width: canvas.width,
//                 height: canvas.height,
//             });
//         }
//     }, []);

//     return (
//         <div>
//             <h1>This is the Banner</h1>
//             <canvas id="canvas"></canvas> {/* Canvas element for the whiteboard */}
//         </div>
//     );
// };

// export default Banner;
//uporrer text ta without toggle

import React, { useEffect, useState } from "react";
import SimpleWhiteBoard from "simple-white-board";
import "./Whiteboard.css"; // External CSS file for styling

const Banner = () => {
  const [isEraserActive, setIsEraserActive] = useState(false);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("#000000");
  const [whiteBoard, setWhiteBoard] = useState(null);
  const canvasRef = React.createRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      // Set logical size (coordinate system)
      const logicalWidth = 1200;
      const logicalHeight = 600;

      // Set the physical display size to match
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;

      // Set the canvas resolution to match the logical size
      canvas.width = logicalWidth;
      canvas.height = logicalHeight;

      // Initialize SimpleWhiteBoard with the logical size
      const whiteBoardInstance = new SimpleWhiteBoard(canvas, {
        backgroundColor: "#ffffff",
        width: logicalWidth,
        height: logicalHeight,
      });
      setWhiteBoard(whiteBoardInstance);

      // Set initial brush size and color (manually, via canvas context)
      const context = canvas.getContext("2d");
      context.lineWidth = brushSize;
      context.strokeStyle = brushColor;

      // Handle eraser toggle
      const toggleEraser = () => {
        setIsEraserActive(!isEraserActive);
        whiteBoardInstance.setEraser(isEraserActive);
      };

      // Attach the toggleEraser function to the button
      const eraserButton = document.getElementById("eraser-button");
      eraserButton.addEventListener("click", toggleEraser);
    }
  }, [isEraserActive, brushSize, brushColor]); // Re-run when brushSize or brushColor changes

  // Update brush size and color dynamically
  const handleBrushSizeChange = (size) => {
    setBrushSize(size);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = size; // Update line width dynamically
  };

  const handleBrushColorChange = (color) => {
    setBrushColor(color);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = color; // Update stroke color dynamically
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleUndo = () => {
    whiteBoard.undo();
  };

  const handleRedo = () => {
    whiteBoard.redo();
  };

  const handleSaveCanvas = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "whiteboard.png";
    link.click();
  };

  return (
    <div className="banner">
      <div className="controls">
        <div className="brush-controls">
          <label className="text-white">Brush Size</label>
          <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={(e) => handleBrushSizeChange(e.target.value)}
          className="w-full h-2 bg-white rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-black"
        />
          <label className="text-white">Color</label>
          <input
            type="color"
            className="w-32"
            value={brushColor}
            onChange={(e) => handleBrushColorChange(e.target.value)}
          />
        </div>
        <div className="action-butto flex flex-row space-x-4">
          <button
            className="w-20 h-12 relative bg-black text-white rounded-full overflow-hidden group focus:outline-none active:outline-none hover:bg-white"
            onClick={handleClearCanvas}
          >
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></span>
            <span className="absolute inset-[2px] bg-black rounded-md border-2 border-transparent"></span>
            <span className="relative z-10">Clear</span>
          </button>
          <button
            className="w-20 h-12 relative bg-black text-white rounded-full overflow-hidden group focus:outline-none active:outline-none hover:bg-white"
            onClick={handleSaveCanvas}
          >
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></span>
            <span className="absolute inset-[2px] bg-black rounded-md border-2 border-transparent"></span>
            <span className="relative z-10">Save</span>
          </button>
          <button
            className="w-40 h-12 relative bg-black text-white rounded-full overflow-hidden group focus:outline-none active:outline-none hover:bg-white"
            id="eraser-button"
          >
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></span>
            <span className="absolute inset-[2px] bg-black rounded-md border-2 border-transparent"></span>
            <span className="relative z-10">Toggle Eraser</span>
          </button>
        </div>
      </div>
      <canvas className="" ref={canvasRef}></canvas>{" "}
      {/* Canvas element for the whiteboard */}
    </div>
  );
};

export default Banner;
