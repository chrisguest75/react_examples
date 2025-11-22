import { Environment, Lightformer } from '@react-three/drei'

function SceneEnvironment() {
  return (
    <Environment background={false} preset={undefined}>
      <group rotation={[0, Math.PI / 3, 0]}>
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-5, 2, 0]}
          scale={[10, 10, 1]}
          color="#63e6be"
        />
        <Lightformer
          intensity={0.5}
          position={[5, 5, -10]}
          scale={[10, 10, 1]}
          color="#60a5fa"
        />
      </group>
    </Environment>
  )
}

export default SceneEnvironment
