import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, StatsGl } from '@react-three/drei'
import Cube from './Cube'
import SceneEnvironment from './SceneEnvironment'

function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.75, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#0f172a" metalness={0} roughness={0.9} />
    </mesh>
  )
}

function RimLight({ position, intensity }) {
  return <directionalLight position={position} intensity={intensity} castShadow />
}

function SceneCanvas({ settings }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/40">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [5, 4, 6], fov: 45 }}>
        <color attach="background" args={[0.03, 0.05, 0.08]} />
        <PerspectiveCamera makeDefault position={[6, 5, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <RimLight position={[5, 5, 5]} intensity={1.2} />
        <RimLight position={[-5, 3, -4]} intensity={0.8} />
        <Cube color={settings.color} spinSpeed={settings.spinSpeed} wireframe={settings.wireframe} />
        <GroundPlane />
        <SceneEnvironment />
        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          autoRotate={settings.autoOrbit}
          autoRotateSpeed={settings.spinSpeed}
          maxPolarAngle={Math.PI - 0.2}
          minPolarAngle={0.3}
        />
        <StatsGl className="hidden md:block" />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/10 via-transparent to-emerald-500/5" />
    </div>
  )
}

export default SceneCanvas
