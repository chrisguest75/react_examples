'use client';

import React, { useEffect, useRef, useState } from 'react';
import Meyda from 'meyda';
import { HistoryChart } from '@/ui/history-chart';

export default function Home() {
  const [features, setFeatures] = useState(null);
  const audioElementRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);
  const analyzerRef = useRef(null);
  const canvasRef = useRef(null);
  const [size, setSize] = useState({
    width: 1920,
    height: 280,
  });

  const canvasWidth = size.width;
  const canvasHeight = size.height;
  const canvarDisplaySize = {
          width: `800px`,
          height: `${(800 / size.width) * size.height}px`,
        }


  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#FFFFFF";
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    ctx.fillRect(0, 0, width, height);

    const boxWidth = width / features?.buffer.length;
    let x_start = (boxWidth - (width % boxWidth)) / 2;

    const xMargin = 6;
    const yMargin = 6;

    // borders
    let normal_colours = ["#888888"];

    let y = height;
    let xCount = 0;
    let bufferIndex = 0;
    for (let x = -x_start; x < width; x += boxWidth) {
        let height = (Math.abs(features?.buffer[bufferIndex]) * -1000);
        ctx.fillStyle = normal_colours[0];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + boxWidth - xMargin, y);
        ctx.lineTo(x + boxWidth - xMargin, y + height - yMargin);
        ctx.lineTo(x, y + height - yMargin);
        ctx.closePath();
        ctx.fill();
        xCount++;
        bufferIndex++;
    }
  };


  useEffect(() => {

    const setupMeyda = () => {
      // Get the audio element
      const audioElement = audioElementRef.current;
      if (!audioElement) return;

      // Create AudioContext
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

      // Create a MediaElementAudioSourceNode
      sourceRef.current = audioContextRef.current.createMediaElementSource(audioElement);

      // Connect it to the destination (so you can still hear the audio)
      sourceRef.current.connect(audioContextRef.current.destination);

      // Create the Meyda Analyzer
      analyzerRef.current = Meyda.createMeydaAnalyzer({
        audioContext: audioContextRef.current,
        source: sourceRef.current,
        bufferSize: 512,
        featureExtractors: ['rms', 'spectralCentroid', 'zcr', 'buffer'],
        callback: (features) => {
          setFeatures(features);
        },
      });

      analyzerRef.current.start();
    };

    setupMeyda();

    return () => {
      if (analyzerRef.current) analyzerRef.current.stop();
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (features) {
      draw(context);
    }
  }, [features]);

  
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
      Meyda
      </h1>
        <div className="flex flex-grow">
          <div className="flex flex-row flex-grow h-[30vh]">
            <div className="w-12/12 debug-border bg-violet-700">
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
          </div>
        </div>


      <audio ref={audioElementRef} controls loop crossOrigin="anonymous" id="audio" src="audio/overconfident_slope.mp3"></audio>
      
      <HistoryChart>  </HistoryChart>
      
      <div className="mt-4">
        {features ? (
          <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(features, null, 2)}</pre>
        ) : (
          <p>Waiting for audio to play...</p>
        )}
      </div>
    </div>
  );
}
