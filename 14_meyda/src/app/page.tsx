'use client';

import React, { useEffect, useRef, useState } from 'react';
import Meyda from 'meyda';
import { HistoryChart, ChartValue } from '@/components/ui/history-chart';

const MAX_LENGTH = 300;
const chartDataRms: number[] = []
const chartDataEnergy: number[] = []

export default function Home() {
  const [features, setFeatures] = useState(null);
  const audioElementRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);
  const analyzerRef = useRef(null);
  const canvasBufferRef = useRef(null);
  const canvasRmsRef = useRef(null);  
  const canvasEnergyRef = useRef(null);  
  const [size, setSize] = useState({
    width: 1920,
    height: 320,
  });

  const canvasWidth = size.width;
  const canvasHeight = size.height;
  const canvarDisplaySize = {
          width: `800px`,
          height: `${(800 / size.width) * size.height}px`,
        }

  const drawBuffer = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#FFFFFF";
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    ctx.fillRect(0, 0, width, height);

    const boxWidth = width / features?.buffer.length;
    let x_start = (boxWidth - (width % boxWidth)) / 2;

    // borders
    let normal_colours = ["#666666"];

    let y = height;
    let xCount = 0;
    let bufferIndex = 0;
    for (let x = -x_start; x < width; x += boxWidth) {
        let height = (Math.abs(features?.buffer[bufferIndex]) * -1000);
        ctx.fillStyle = normal_colours[0];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + boxWidth, y);
        ctx.lineTo(x + boxWidth, y + height);
        ctx.lineTo(x, y + height);
        ctx.closePath();
        ctx.fill();
        xCount++;
        bufferIndex++;
    }
  };

  const drawRms = (ctx: CanvasRenderingContext2D, data: number[], scale: number) => {
    ctx.fillStyle = "#FFFFFF";
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    ctx.fillRect(0, 0, width, height);

    const boxWidth = width / data.length;
    let x_start = (boxWidth - (width % boxWidth)) / 2;

    // borders
    let normal_colours = ["#666666"];

    let y = height;
    let xCount = 0;
    let bufferIndex = 0;
    for (let x = -x_start; x < width; x += boxWidth) {
        let height = (Math.abs(data[bufferIndex]) * scale);
        ctx.fillStyle = normal_colours[0];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + boxWidth, y);
        ctx.lineTo(x + boxWidth, y + height);
        ctx.lineTo(x, y + height);
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
        featureExtractors: [
          'rms', 
          'spectralCentroid', 
          'zcr', 
          'buffer',
          'energy',
          'loudness',
          'mfcc'           
        ],
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

    if (features) {
      const canvasBuffer = canvasBufferRef.current;
      const contextBuffer = canvasBuffer.getContext("2d");
      drawBuffer(contextBuffer);

      const canvasRms = canvasRmsRef.current;
      const contextRms = canvasRms.getContext("2d");
      drawRms(contextRms, chartDataRms, -1000);
  
      const canvasEnergy = canvasEnergyRef.current;
      const contextEnergy = canvasEnergy.getContext("2d");
      drawRms(contextEnergy, chartDataEnergy, -100);      
    }

  }, [features]);

  const debugText = () => {
    if (!features) return "";

    chartDataRms.push(features.rms);
    if (chartDataRms.length > MAX_LENGTH) {
      chartDataRms.shift();
    }
    chartDataEnergy.push(features.energy);
    if (chartDataEnergy.length > MAX_LENGTH) {
      chartDataEnergy.shift();
    }

    const timeStamp = audioElementRef.current.currentTime;
    const timeCode = document.getElementById("timeCode");
    if (timeCode) {
      const minutes = Math.floor(timeStamp / 60);
      const seconds = Math.floor(timeStamp % 60);
      const milliseconds = Math.floor((timeStamp % 1) * 1000);
      timeCode.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    }


    const data = {
      time: timeStamp,
      rms: features.rms,
      spectralCentroid: features.spectralCentroid,
      zcr: features.zcr,
      energy: features.energy,
      loudness: features.loudness,
      mfcc: features.mfcc,
    }

    const json = JSON.stringify(data, null, 2);

    return json;
  }

  //<!--<HistoryChart values={chartData}>  </HistoryChart>-->
  return (
    <div>
      <h1 className="text-4xl font-extrabold lg:text-5xl mb-4">
      Meyda
      </h1>
      <div className="flex flex-grow rounded">
        <div className="flex flex-row flex-grow p-4">
          <div className="w-12/12 debug-border bg-violet-700 m-4 rounded-lg shadow-2xl">
          <div className="flex justify-center items-center m-4">
          <h2 id="timeCode" className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-stone-300">
          00:00:00
          </h2>
          </div>

            <div className="flex justify-center items-center m-4">
              <canvas
                width={canvasWidth}
                height={canvasHeight}
                style={canvarDisplaySize}
                className="shadow-2xl rounded-lg"
                ref={canvasBufferRef}
              />
            </div>
            <div className="flex justify-center items-center m-4">
              <canvas
                width={canvasWidth}
                height={canvasHeight}
                style={canvarDisplaySize}
                className="shadow-2xl rounded-lg"
                ref={canvasRmsRef}
              />              
            </div>
            <div className="flex justify-center items-center m-4">
              <canvas
                width={canvasWidth}
                height={canvasHeight}
                style={canvarDisplaySize}
                className="shadow-2xl rounded-lg"
                ref={canvasEnergyRef}
              />              
            </div>            
            <div className="flex justify-center items-center m-4">
              <audio ref={audioElementRef} controls loop crossOrigin="anonymous" id="audio" src="audio/overconfident_slope.mp3"></audio>
            </div>            
          </div>
        </div>       
      </div>
      <div className="m-4">
        {features ? (
          <pre className="bg-gray-100 p-2 rounded">{debugText()}</pre>
        ) : (
          <p>Waiting for audio to play...</p>
        )}
      </div>       
    </div>
  );
}
