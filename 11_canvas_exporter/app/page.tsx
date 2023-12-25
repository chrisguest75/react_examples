"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";

export default function Home() {
  const canvasRef = useRef(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 32, 32);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
  });

  const handleButtonClick = () => {
    // Add your logic here for the button click
    console.log("Button clicked!");
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.click();
  };

  return (
    <main className="">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Button
      </button>
      <div className="w-[100%] h-[100%] border border-gray-600 rounded-lg shadow-lg">
        <canvas className="w-[100%] h-[100%]" ref={canvasRef} />
      </div>
      {/* <canvas
        className="w-[100%] h-[100%] border border-gray-600 rounded-lg shadow-lg"
        ref={canvasRef}
  /> */}
    </main>
  );
}
