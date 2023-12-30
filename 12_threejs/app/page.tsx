"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import * as THREE from "three";

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
    case "custom":
      // prettier-ignore
      const vertices = new Float32Array([
        -0.5, -0.5,  0.5,  // Front Bottom Left
        0.5, -0.5,  0.5,  // Front Bottom Right
        0.5,  0.5,  0.5,  // Front Top Right
        -0.5,  0.5,  0.5,  // Front Top Left
        0.0,  0.0,  0.5,  // Front Center
      
        -0.5, -0.5, -0.5,  // Back Bottom Left
        0.5, -0.5, -0.5,  // Back Bottom Right
        0.5,  0.5, -0.5,  // Back Top Right
        -0.5,  0.5, -0.5,  // Back Top Left
        0.0,  0.0, -0.5,  // Back Center

        -0.5,  0.5, -0.5,  // Top Back Left
        -0.5,  0.5,  0.5,  // Top Front Left
        0.5,  0.5,  0.5,  // Top Front Right
        0.5,  0.5, -0.5,  // Top Back Right
        0.0,  0.5,  0.0,  // Top Center

        -0.5, -0.5, -0.5,  // Bottom Back Left
        -0.5, -0.5,  0.5,  // Bottom Front Left
        0.5, -0.5,  0.5,  // Bottom Front Right
        0.5, -0.5, -0.5,  // Bottom Back Right
        0.0, -0.5,  0.0,  // Bottom Center
      
        0.5, -0.5, -0.5,  // Right Back Bottom
        0.5, -0.5,  0.5,  // Right Front Bottom
        0.5,  0.5,  0.5,  // Right Front Top
        0.5,  0.5, -0.5,  // Right Back Top
        0.5,  0.0,  0.0,  // Right Center
      
      -0.5, -0.5, -0.5,  // Left Back Bottom
      -0.5, -0.5,  0.5,  // Left Front Bottom
      -0.5,  0.5,  0.5,  // Left Front Top
      -0.5,  0.5, -0.5,  // Left Back Top
      -0.5,  0.0,  0.0  // Left Center
      ]);

      // prettier-ignore
      const indices = new Uint16Array([ 
        1,  4,  0,  2,  4,  1,  3,  4,  2,  0,  4,  3,  // Front face
        5,  9,  6,  6,  9,  7,  7,  9,  8,  8,  9,  5,  // Back face
        11, 14, 10, 12, 14, 11, 13, 14, 12, 10, 14, 13,  // Top face
        15, 19, 16, 16, 19, 17, 17, 19, 18, 18, 19, 15,  // Bottom face
        20, 24, 21, 21, 24, 22, 22, 24, 23, 23, 24, 20,  // Right face
        26, 29, 25, 27, 29, 26, 28, 29, 27, 25, 29, 28  // Left face
      ]);

      // prettier-ignore
      const normals = new Float32Array([ 
        0,  0,  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,  // Front face normals
        0,  0, -1,  0,  0, -1,  0,  0, -1,  0,  0, -1,  0,  0, -1,  // Back face normals
        0,  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,  0,  // Top face normals
        0, -1,  0,  0, -1,  0,  0, -1,  0,  0, -1,  0,  0, -1,  0,  // Bottom face normals
        1,  0,  0,  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,  0,  0,  // Right face normals
       -1,  0,  0, -1,  0,  0, -1,  0,  0, -1,  0,  0, -1,  0,  0  // Left face normals
            ]);

      // prettier-ignore
      const colors = new Float32Array([
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,  // Front face (red)
        0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,  // Back face (green)
        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,  // Top face (blue)
        1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,  // Bottom face (yellow)
        0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,  // Right face (cyan)
        1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1  // Left face (magenta)
      ]);

      mesh = (
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={vertices}
            count={vertices.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={colors.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-normal"
            array={normals}
            count={normals.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="index"
            array={indices}
            count={indices.length}
            itemSize={1}
          />
        </bufferGeometry>
      );
      break;
    default:
      break;
  }

  let material = (
    <meshStandardMaterial
      flatShading
      color={hovered ? props.highlight : props.color}
      transparent={true}
      opacity={0.5}
      side={props.doublesided ? THREE.DoubleSide : undefined}
    />
  );
  if (props.solid) {
    material = (
      <meshStandardMaterial
        flatShading
        color={hovered ? props.highlight : props.color}
        side={props.doublesided ? THREE.DoubleSide : undefined}
      />
    );
  }
  if (props.wireframe) {
    material = (
      <meshStandardMaterial
        wireframe={true}
        color={hovered ? props.highlight : props.color}
        side={props.doublesided ? THREE.DoubleSide : undefined}
      />
    );
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
      {material}
    </mesh>
  );
}

export default function Home() {
  const canvasRef = useRef(null);
  const [showLeva, toggleLeva] = useState(false);

  const [
    {
      xrotation,
      yrotation,
      zrotation,
      wireframe,
      solid,
      doublesided,
      grid,
      color,
      highlightColor,
      geometry,
    },
  ] = useControls(() => ({
    geometry: {
      value: "custom",
      options: ["cube", "sphere", "dodecahedron", "custom"],
    },
    color: {
      value: "#0d00ff",
      label: "color",
    },
    highlightColor: {
      value: "#0ca80c",
      label: "highlight",
    },
    xrotation: false,
    yrotation: false,
    zrotation: false,
    wireframe: false,
    solid: true,
    doublesided: false,
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

  let leva = <Leva hidden />;
  if (showLeva) {
    leva = <Leva />;
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
                <a onClick={handleButtonClick}>Save</a>
              </li>
              <li>
                <a onClick={() => toggleLeva(!showLeva)}>Customize</a>
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
                wireframe={wireframe}
                solid={solid}
                doublesided={doublesided}
              />
              <OrbitControls
                enablePan={false}
                //minPolarAngle={1.5}
                //maxPolarAngle={1.5}
                minDistance={5}
                maxDistance={10}
                enableZoom={true}
                //autoRotate={rotate}
              />
              {gridHelper}
              <arrowHelper
                args={[
                  new THREE.Vector3(1, 0, 0),
                  new THREE.Vector3(0, 0, 0),
                  3.0,
                  0xff0000,
                ]}
              />
              <arrowHelper
                args={[
                  new THREE.Vector3(0, 1, 0),
                  new THREE.Vector3(0, 0, 0),
                  3.0,
                  0x00ff00,
                ]}
              />
              <arrowHelper
                args={[
                  new THREE.Vector3(0, 0, 1),
                  new THREE.Vector3(0, 0, 0),
                  3.0,
                  0x0000ff,
                ]}
              />
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
        {leva}
      </div>
    </main>
  );
}
