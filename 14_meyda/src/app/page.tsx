'use client';

import React, { useEffect, useRef, useState } from 'react';
import Meyda from 'meyda';

export default function Home() {
  const [features, setFeatures] = useState(null);
  const audioElementRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);
  const analyzerRef = useRef(null);

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
        featureExtractors: ['rms', 'spectralCentroid', 'zcr'],
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


  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
      Meyda
      </h1>
    
      <audio ref={audioElementRef} controls loop crossOrigin="anonymous" id="audio" src="audio/overconfident_slope.mp3"></audio>
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
