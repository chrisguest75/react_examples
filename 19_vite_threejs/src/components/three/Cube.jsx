import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function Cube({ isSpinning = true }) {
  const cubeRef = useRef()

  useFrame((_, delta) => {
    if (!cubeRef.current || !isSpinning) return
    cubeRef.current.rotation.x += delta
    cubeRef.current.rotation.y += delta * 1.2
  })

  return (
    <mesh ref={cubeRef} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hsl(198 93% 60%)" metalness={0.2} roughness={0.3} />
    </mesh>
  )
}
