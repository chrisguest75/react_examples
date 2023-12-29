"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function Home() {
  const canvasRef = useRef(null);
  const [size, setSize] = useState({
    width: 1920,
    height: 1080,
    ratio: "16:9",
  });
  const [frame, setFrame] = useState(0);

  const canvasWidth = size.width;
  const canvasHeight = size.height;
  const aspectRatio = size.ratio;
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

    ctx.fillRect(0, 0, width, height);

    const boxWidth = 72;
    const boxHeight = 72;

    let boxes_x = width / boxWidth;
    let boxes_y = height / boxHeight;

    let x_start = (boxWidth - (width % boxWidth)) / 2;
    let y_start = (boxHeight - (height % boxHeight)) / 2;

    const xMargin = 6;
    const yMargin = 6;

    // borders
    let edge_colours = ["#000000", "#FFFFFF"];
    let normal_colours = ["#888888"];

    let yCount = 0;
    for (let y = -y_start; y < height; y += boxHeight) {
      let xCount = 0;
      for (let x = -x_start; x < width; x += boxWidth) {
        if (
          y === -y_start ||
          x === -x_start ||
          x + boxWidth > width ||
          y + boxHeight > height
        ) {
          ctx.fillStyle = edge_colours[(xCount + yCount) % 2];
        } else {
          ctx.fillStyle = normal_colours[0];
        }
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + boxWidth - xMargin, y);
        ctx.lineTo(x + boxWidth - xMargin, y + boxHeight - yMargin);
        ctx.lineTo(x, y + boxHeight - yMargin);
        ctx.closePath();
        ctx.fill();
        xCount++;
      }
      yCount++;
    }

    // big boxes
    const boxes: {
      x: number;
      y: number;
      width: number;
      height: number;
      colour: string;
    }[] = [
      [
        boxWidth * 2 - x_start,
        boxHeight * 5 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#888888",
      ],
      [
        boxWidth * 2 - x_start,
        boxHeight * 8 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#888888",
      ],
      [
        boxWidth * (boxes_x - 4) + x_start,
        boxHeight * 5 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#888888",
      ],
      [
        boxWidth * (boxes_x - 4) + x_start,
        boxHeight * 8 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#888888",
      ],
      [
        boxWidth * 5 - x_start,
        boxHeight * 2 - y_start,
        boxWidth,
        boxHeight * 6,
        "#13836C",
      ],
      [
        boxWidth * 6 - x_start,
        boxHeight * 2 - y_start,
        boxWidth,
        boxHeight * 2,
        "#4D66A9",
      ],
      [
        boxWidth * 5 - x_start,
        boxHeight * 8 - y_start,
        boxWidth,
        boxHeight * 6,
        "#B54E68",
      ],
      [
        boxWidth * 6 - x_start,
        boxHeight * 12 - y_start,
        boxWidth,
        boxHeight * 2,
        "#927227",
      ],
      [
        boxWidth * (boxes_x - 7) + x_start,
        boxHeight * 2 - y_start,
        boxWidth,
        boxHeight * 2,
        "#4D66A9",
      ],
      [
        boxWidth * (boxes_x - 6) + x_start,
        boxHeight * 2 - y_start,
        boxWidth,
        boxHeight * 6,
        "#6A8328",
      ],
      [
        boxWidth * (boxes_x - 6) + x_start,
        boxHeight * 8 - y_start,
        boxWidth,
        boxHeight * 6,
        "#655A9D",
      ],

      [
        boxWidth * (boxes_x - 7) + x_start,
        boxHeight * 12 - y_start,
        boxWidth,
        boxHeight * 2,
        "#927227",
      ],
    ];

    for (let index = 0; index < boxes.length; index++) {
      let x = boxes[index][0];
      let y = boxes[index][1];
      let w = boxes[index][2];
      let h = boxes[index][3];
      ctx.fillStyle = boxes[index][4];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w - xMargin, y);
      ctx.lineTo(x + w - xMargin, y + h - yMargin);
      ctx.lineTo(x, y + h - yMargin);
      ctx.closePath();
      ctx.fill();
    }

    const grills = [
      [
        boxWidth * 3 - x_start,
        boxHeight * 5 - y_start + (boxHeight / 5) * 0,
        boxWidth * 1,
        boxHeight / 5,
        "#000000",
      ],
      [
        boxWidth * 3 - x_start,
        boxHeight * 5 - y_start + (boxHeight / 5) * 1,
        boxWidth * 1,
        boxHeight / 5,
        "#FFFFFF",
      ],
      [
        boxWidth * 3 - x_start,
        boxHeight * 5 - y_start + (boxHeight / 5) * 2,
        boxWidth * 1,
        boxHeight / 5,
        "#000000",
      ],
      [
        boxWidth * 3 - x_start,
        boxHeight * 5 - y_start + (boxHeight / 5) * 3,
        boxWidth * 1,
        boxHeight / 5,
        "#FFFFFF",
      ],
      [
        boxWidth * 3 - x_start,
        boxHeight * 5 - y_start + (boxHeight / 5) * 4,
        boxWidth * 1,
        boxHeight / 5,
        "#000000",
      ],
    ];

    for (let index = 0; index < grills.length; index++) {
      let x = grills[index][0];
      let y = grills[index][1];
      let w = grills[index][2];
      let h = grills[index][3];
      ctx.fillStyle = grills[index][4];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w, y);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x, y + h);
      ctx.closePath();
      ctx.fill();
    }

    // circles
    const circles = [
      [boxWidth * 3 - x_start, boxHeight * 3 - y_start],
      [boxWidth * 3 - x_start, boxHeight * 13 - y_start],
      [boxWidth * (boxes_x - 3) + x_start, boxHeight * 3 - y_start],
      [boxWidth * (boxes_x - 3) + x_start, boxHeight * 13 - y_start],
    ];

    for (let index = 0; index < circles.length; index++) {
      let x = circles[index][0];
      let y = circles[index][1];
      ctx.fillStyle = "#000000";
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 15;
      ctx.beginPath();
      ctx.arc(x, y, boxHeight * 1.5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();

      ctx.fillStyle = "#FFFFFF";
      ctx.lineWidth = boxHeight;
      ctx.beginPath();
      ctx.arc(
        x,
        y,
        boxHeight,
        ((2 * Math.PI) / 8) * 0,
        ((2 * Math.PI) / 8) * 1
      );
      ctx.stroke();
      ctx.closePath();
      // ctx.fillStyle = '#FF0000';
      // ctx.lineWidth = (boxHeight);
      // ctx.beginPath();
      // ctx.arc(x, y, (boxHeight), ((2 * Math.PI) / 16) * 0, ((2 * Math.PI) / 16) * 2);
      // ctx.stroke();
      // ctx.closePath();

      ctx.fillStyle = "#FFFFFF";
      ctx.lineWidth = boxHeight;
      ctx.beginPath();
      ctx.arc(
        x,
        y,
        boxHeight,
        ((2 * Math.PI) / 8) * 2,
        ((2 * Math.PI) / 8) * 3
      );
      ctx.stroke();
      ctx.closePath();

      ctx.fillStyle = "#FFFFFF";
      ctx.lineWidth = boxHeight;
      ctx.beginPath();
      ctx.arc(
        x,
        y,
        boxHeight,
        ((2 * Math.PI) / 8) * 4,
        ((2 * Math.PI) / 8) * 5
      );
      ctx.stroke();
      ctx.closePath();

      ctx.fillStyle = "#FFFFFF";
      ctx.lineWidth = boxHeight;
      ctx.beginPath();
      ctx.arc(
        x,
        y,
        boxHeight,
        ((2 * Math.PI) / 8) * 6,
        ((2 * Math.PI) / 8) * 7
      );
      ctx.stroke();
      ctx.closePath();

      /*ctx.beginPath();
        ctx.arc(x, y, (boxHeight), ((2 * Math.PI) / 8) * 2, ((2 * Math.PI) / 8) * 1);
        ctx.stroke();
        ctx.closePath();*/

      /*ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(x, y, (boxHeight), 0.125, 0.20 * Math.PI);
        ctx.stroke();*/

      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.arc(x, y, boxHeight * 0.5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.arc(x, y, boxHeight * 0.4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.arc(x, y, boxHeight * 0.3, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.arc(x, y, boxHeight * 0.2, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }

    // big circle
    const inside = [
      [
        width / 2 - boxWidth * 6,
        boxHeight * 2 - y_start,
        boxWidth * 12,
        boxHeight * 2,
        "#FFFFFF",
      ],

      [
        width / 2 - boxWidth * 6,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#AAAAAA",
      ],
      [
        width / 2 - boxWidth * 5,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#000000",
      ],
      [
        width / 2 - boxWidth * 4,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#AAAAAA",
      ],
      [
        width / 2 - boxWidth * 3,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#000000",
      ],
      [
        width / 2 - boxWidth * 2,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#AAAAAA",
      ],
      [
        width / 2 - boxWidth * 1,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#000000",
      ],
      [
        width / 2 + boxWidth * 0,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#AAAAAA",
      ],
      [
        width / 2 + boxWidth * 1,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#000000",
      ],
      [
        width / 2 + boxWidth * 2,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#AAAAAA",
      ],
      [
        width / 2 + boxWidth * 3,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#000000",
      ],
      [
        width / 2 + boxWidth * 4,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#AAAAAA",
      ],
      [
        width / 2 + boxWidth * 5,
        boxHeight * 4 - y_start,
        boxWidth * 1,
        boxHeight * 2,
        "#000000",
      ],

      [
        width / 2 - boxWidth * 6,
        boxHeight * 5 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#B3B604",
      ],
      [
        width / 2 - boxWidth * 4,
        boxHeight * 5 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#19B6B2",
      ],
      [
        width / 2 - boxWidth * 2,
        boxHeight * 5 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#17B803",
      ],
      [
        width / 2 + boxWidth * 0,
        boxHeight * 5 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#AF00B3",
      ],
      [
        width / 2 + boxWidth * 2,
        boxHeight * 5 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#B10004",
      ],
      [
        width / 2 + boxWidth * 4,
        boxHeight * 5 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#0900B2",
      ],

      [
        width / 2 - boxWidth * 6,
        boxHeight * 7 - y_start,
        boxWidth * 12,
        boxHeight * 1,
        "#000000",
      ],

      [
        width / 2 - boxWidth * 6,
        boxHeight * 8 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#000000",
      ],
      [
        width / 2 - boxWidth * 4,
        boxHeight * 8 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#888888",
      ],
      [
        width / 2 - boxWidth * 2,
        boxHeight * 8 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#000000",
      ],
      [
        width / 2 + boxWidth * 0,
        boxHeight * 8 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#888888",
      ],
      [
        width / 2 + boxWidth * 2,
        boxHeight * 8 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#000000",
      ],
      [
        width / 2 + boxWidth * 4,
        boxHeight * 8 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#888888",
      ],

      [
        width / 2 - boxWidth * 6,
        boxHeight * 10 - y_start,
        boxWidth * 2,
        boxHeight * 1,
        "#000000",
      ],
      [
        width / 2 - boxWidth * 4,
        boxHeight * 10 - y_start,
        boxWidth * 2,
        boxHeight * 1,
        "#333333",
      ],
      [
        width / 2 - boxWidth * 2,
        boxHeight * 10 - y_start,
        boxWidth * 2,
        boxHeight * 1,
        "#666666",
      ],
      [
        width / 2 + boxWidth * 0,
        boxHeight * 10 - y_start,
        boxWidth * 2,
        boxHeight * 1,
        "#999999",
      ],
      [
        width / 2 + boxWidth * 2,
        boxHeight * 10 - y_start,
        boxWidth * 2,
        boxHeight * 1,
        "#CCCCCC",
      ],
      [
        width / 2 + boxWidth * 4,
        boxHeight * 10 - y_start,
        boxWidth * 2,
        boxHeight * 1,
        "#FFFFFF",
      ],

      [
        width / 2 - boxWidth * 6,
        boxHeight * 11 - y_start,
        boxWidth * 11,
        boxHeight * 1,
        "#FFFFFF",
      ],

      [
        width / 2 - boxWidth * 6,
        boxHeight * 12 - y_start,
        boxWidth * 5,
        boxHeight * 2,
        "#B3B604",
      ],
      [
        width / 2 - boxWidth * 2,
        boxHeight * 12 - y_start,
        boxWidth * 2,
        boxHeight * 2,
        "#B10004",
      ],
      [
        width / 2 + boxWidth * 0,
        boxHeight * 12 - y_start,
        boxWidth * 5,
        boxHeight * 2,
        "#B3B604",
      ],

      [
        width / 2 - boxWidth * 2.5,
        boxHeight * 2.5 - y_start,
        boxWidth * 5,
        boxHeight * 1.5,
        "#000000",
      ],
      [
        width / 2 - boxWidth * 2.5,
        boxHeight * 11 - y_start,
        boxWidth * 5.5,
        boxHeight * 1,
        "#000000",
      ],
    ];

    ctx.save();
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, (boxHeight * 12) / 2, 0, 2 * Math.PI);
    ctx.clip();
    for (let index = 0; index < inside.length; index++) {
      let x = inside[index][0];
      let y = inside[index][1];
      let w = inside[index][2];
      let h = inside[index][3];
      ctx.fillStyle = inside[index][4];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w, y);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x, y + h);
      ctx.closePath();
      ctx.fill();
    }

    ctx.font = "60px Roboto, sans-serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("TRINT TEST", width / 2, boxHeight * 3.5 - y_start);
    ctx.fillText(
      `   ${width}*${height} ${aspectRatio}`,
      width / 2,
      boxHeight * 11.75 - y_start
    );

    ctx.fillText(`FRAME:${frame}`, width / 2, height / 2 - y_start / 2);
    setFrame(frame + 1);
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

  const handleResizeCanvas = (width: number, height: number, ratio: string) => {
    console.log("Resize clicked!");

    setSize({ width: width, height: height, ratio: ratio });
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
                      <a onClick={() => handleResizeCanvas(1920, 1080, "16:9")}>
                        1920x1080 16:9
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleResizeCanvas(1440, 1080, "4:3")}>
                        1440x1080 4:3
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleResizeCanvas(1350, 1080, "5:4")}>
                        1350x1080 5:4
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleResizeCanvas(1080, 1920, "9:16")}>
                        1080x1920 9:16
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-grow h-[10vh] bg-violet-700">
          <div className="flex">
            <p className="font-sans">
              Test cards play a crucial role in evaluating and optimizing
              software encoding pipelines, which are essential for converting
              raw video feeds into digital formats suitable for broadcast. These
              test cards, with their well-defined patterns and colors, provide a
              standardized reference to ensure that the encoding process
              accurately captures and transmits visual details and color
              fidelity. This is particularly important in a digital broadcast
              environment, where the quality of the encoding directly impacts
              the viewer's experience.
            </p>
            <p className="font-sans">
              Using test cards in software encoding pipelines allows engineers
              to methodically test and calibrate various aspects of the video
              processing chain. This includes checking compression algorithms,
              verifying color grading, ensuring proper aspect ratio handling,
              and assessing resolution scaling. The consistent use of test cards
              helps in identifying any discrepancies or faults in the encoding
              process, enabling technicians to fine-tune the software for
              optimal performance. This not only enhances the quality of the
              broadcast but also ensures reliability and efficiency in the
              processing and transmission of digital video content.
            </p>
          </div>
        </div>
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
                  className="shadow-2xl"
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
