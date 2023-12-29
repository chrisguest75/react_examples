"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    if (clicked) {
      ref.current.rotation.z += delta;
    }
  });

  let mesh = <boxGeometry args={[1, 1, 1, 5, 5, 5]} />;
  if (clicked) {
    mesh = <dodecahedronGeometry args={[1, 1]} />;
  }
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      {mesh}
      <meshStandardMaterial flatShading color={hovered ? 0x606060 : 0x404040} />
    </mesh>
  );
}

export default function Home() {
  const { name, aNumber } = useControls({ name: "World", aNumber: 0 });

  return (
    <main className="w-[100vw] h-[100vh]">
      <div className="flex flex-col">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl uppercase">ThreeJS Fiber</a>
          </div>
        </div>
        <div className="flex flex-grow">
          <div className="flex flex-row flex-grow h-[90vh] bg-gradient-to-b from-slate-800 to-slate-900">
            <Canvas>
              <hemisphereLight
                skyColor={0xffffff}
                groundColor={0x000000}
                intensity={10.2}
              />
              <ambientLight color={0x204040} intensity={10.2} />

              <Box position={[0, 0, 0]} />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
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
