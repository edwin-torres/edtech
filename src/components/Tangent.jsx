// src/components/Tangent.jsx
import { Line, OrthographicCamera } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import * as THREE from 'three'

export default function Tangent({ x0 }) {
  const f = (x) => Math.pow(x, 3) - x
  const df = (x) => 3 * x * x - 1

  const y0 = f(x0)
  const slope = df(x0)

  const tangentLength = 3
  const tangentPoints = [
    new THREE.Vector3(x0 - tangentLength / 2, y0 - slope * tangentLength / 2, 0),
    new THREE.Vector3(x0 + tangentLength / 2, y0 + slope * tangentLength / 2, 0),
  ]

  const spring = useSpring({
    position: [x0, y0, 0],
    config: { tension: 250, friction: 25 },
  })

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={120} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />

      {/* Axes */}
      <Line points={[[-3, 0, 0], [3, 0, 0]]} color="#888" lineWidth={1} />
      <Line points={[[0, -3, 0], [0, 3, 0]]} color="#888" lineWidth={1} />

      {/* Curve + Tangent */}
      <Line
        points={Array.from({ length: 81 }, (_, i) => {
          const x = -2 + (i / 80) * 4
          const y = f(x)
          return new THREE.Vector3(x, y, 0)
        })}
        color="hotpink"
        lineWidth={3}
      />
      <Line points={tangentPoints} color="orange" lineWidth={2} />

      {/* Moving point */}
      <a.mesh position={spring.position}>
        <sphereGeometry args={[0.06, 32, 32]} />
        <meshStandardMaterial color="deepskyblue" />
      </a.mesh>
    </>
  )
}
