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
    if (props.rotations.x) {
      ref.current.rotation.x += delta;
    }
    if (props.rotations.y) {
      ref.current.rotation.y += delta;
    }
    if (props.rotations.z) {
      ref.current.rotation.z += delta;
    }
  });

  let mesh = <boxGeometry args={[1.5, 1.5, 1.5, 5, 5, 5]} />;
  switch (props.geometry) {
    case "sphere":
      mesh = <sphereGeometry args={[1, 8, 8]} />;
      break;
    case "dodecahedron":
      mesh = <dodecahedronGeometry args={[1, 2]} />;
      break;
    default:
      break;
  }
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      position={props.position}
      ref={ref}
      scale={2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      {mesh}
      <meshStandardMaterial
        flatShading
        color={hovered ? props.highlight : props.color}
      />
    </mesh>
  );
}

export default function Home() {
  const canvasRef = useRef(null);

  const [
    { xrotation, yrotation, zrotation, grid, color, highlightColor, geometry },
  ] = useControls(() => ({
    geometry: { value: "cube", options: ["sphere", "dodecahedron"] },
    color: {
      value: "#0d00ff",
      label: "color",
    },
    highlightColor: {
      value: "#0ca80c",
      label: "highlight",
    },
    xrotation: true,
    yrotation: true,
    zrotation: true,
    grid: true,
  }));

  const handleButtonClick = () => {
    // Add your logic here for the button click
    console.log("Export clicked!");
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.click();
  };

  let gridHelper;
  if (grid) {
    gridHelper = <gridHelper />;
  }
  return (
    <main className="w-[100vw] h-[100vh]">
      <div className="flex flex-col">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl uppercase">ThreeJS Fiber</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-2">
              <li>
                <a onClick={handleButtonClick}>Export</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-grow">
          <div className="flex flex-row flex-grow h-[90vh] bg-gradient-to-b from-slate-800 to-slate-900">
            <Canvas
              ref={canvasRef}
              gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
            >
              <hemisphereLight
                skyColor={0xffffff}
                groundColor={0x000000}
                intensity={10.2}
              />
              <ambientLight color={0x204040} intensity={5.2} />

              <Box
                position={[0, 0, 0]}
                geometry={geometry}
                color={color}
                highlight={highlightColor}
                rotations={{ x: xrotation, y: yrotation, z: zrotation }}
              />
              <OrbitControls
                enablePan={false}
                minPolarAngle={1.5}
                maxPolarAngle={1.5}
                minDistance={5}
                maxDistance={10}
                enableZoom={true}
                //autoRotate={rotate}
              />
              {gridHelper}
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
