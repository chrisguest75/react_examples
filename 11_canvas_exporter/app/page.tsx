"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function Home() {
  const canvasRef = useRef(null);
  const [size, setSize] = useState({ width: 1920, height: 1080 });
  const canvasWidth = size.width;
  const canvasHeight = size.height;
  const canvarDisplaySize = {
    width: `800px`,
    height: `${(800 / size.width) * size.height}px`,
  };

  // const canvarDisplaySize = {
  //   width: `600px`,
  //   height: `337px`,
  // };
  // const canvarDisplaySize = {
  //   width: `${size.width}px`,
  //   height: `${size.height}px`,
  // };

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#FFFFFF";
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const boxWidth = 72;
    const boxHeight = 72;
    const xInset = (boxWidth / 3) * 2;
    const yInset = (boxHeight / 2) * 1;
    const xMargin = 6;
    const yMargin = 6;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, width, height);

    // borders
    let yOdd = false;
    for (let y = -yInset; y < height; y += boxHeight) {
      let xOdd = false;
      for (let x = -xInset; x < width; x += boxWidth) {
        if (
          y === -yInset ||
          x === -xInset ||
          x + boxWidth > width ||
          y + boxHeight > height
        ) {
          if (yOdd) {
            if (xOdd) {
              ctx.fillStyle = "#000000";
            } else {
              ctx.fillStyle = "#FFFFFF";
            }
          } else {
            if (xOdd) {
              ctx.fillStyle = "#FFFFFF";
            } else {
              ctx.fillStyle = "#000000";
            }
          }
        } else {
          ctx.fillStyle = "#888888";
        }
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + boxWidth - xMargin, y);
        ctx.lineTo(x + boxWidth - xMargin, y + boxHeight - yMargin);
        ctx.lineTo(x, y + boxHeight - yMargin);
        ctx.closePath();
        //ctx.fillStyle = gradient1;
        ctx.fill();
        xOdd == false ? (xOdd = true) : (xOdd = false);
      }
      yOdd == false ? (yOdd = true) : (yOdd = false);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
  });

  const handleButtonClick = () => {
    // Add your logic here for the button click
    console.log("Export clicked!");
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.click();
  };

  const handleResizeCanvas = (width: number, height: number) => {
    console.log("Resize clicked!");

    setSize({ width: width, height: height });
  };

  return (
    <main className="w-[100vw] h-[100vh]">
      {/* <div className="toast toast-center">
        <div className="alert alert-info">
          <span>Saved</span>
        </div>
      </div> */}

      <div className="flex flex-col">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl uppercase">
              Testcard Generator
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-2">
              <li>
                <a onClick={handleButtonClick}>Export</a>
              </li>
              <li>
                <details>
                  <summary>Resolutions</summary>
                  <ul className="p-1 bg-neutral rounded-t-none">
                    <li>
                      <a onClick={() => handleResizeCanvas(1920, 1080)}>
                        1920x1080 16:9
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleResizeCanvas(1440, 1080)}>
                        1440x1080 4:3
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleResizeCanvas(1350, 1080)}>
                        1350x1080 5:4
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleResizeCanvas(1080, 1920)}>
                        1080x1920 9:16
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-grow h-[10vh] bg-violet-700"></div>
        <div className="flex flex-grow">
          <div className="flex flex-row flex-grow h-[70vh]">
            <div className="w-1/12 debug-border bg-violet-700"></div>
            <div className="w-10/12 debug-border bg-violet-700">
              <div
                style={{ width: "100%", height: "100%" }}
                className="flex justify-center items-center"
              >
                <canvas
                  width={canvasWidth}
                  height={canvasHeight}
                  style={canvarDisplaySize}
                  ref={canvasRef}
                />
              </div>
            </div>
            <div className="w-1/12 debug-border  bg-violet-700"></div>
          </div>
        </div>
        <div className="flex flex-grow h-[10vh] bg-violet-700"></div>

        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
          <aside className="items-center grid-flow-col">
            <p>Chris Guest © 2023</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            CommitId: 1234567890abcdef
          </nav>
        </footer>
      </div>
    </main>
  );
}
