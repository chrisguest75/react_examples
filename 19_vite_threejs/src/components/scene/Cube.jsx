import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Cube({ color, spinSpeed, wireframe }) {
  const meshRef = useRef(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * spinSpeed
    meshRef.current.rotation.y += delta * spinSpeed * 1.2
  })

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={color}
        metalness={0.2}
        roughness={0.35}
        wireframe={wireframe}
      />
    </mesh>
  )
}

export default Cube
