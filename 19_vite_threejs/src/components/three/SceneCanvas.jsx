import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Cube } from './Cube'

export function SceneCanvas({ isSpinning }) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-border bg-card">
      <Canvas camera={{ position: [3, 3, 3], fov: 45 }} shadows>
        <color attach="background" args={["#020817"]} />
        <hemisphereLight intensity={0.6} groundColor="#0f172a" />
        <directionalLight position={[3, 3, 2]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <Cube isSpinning={isSpinning} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableDamping enablePan={false} minDistance={2.5} maxDistance={6} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  )
}
