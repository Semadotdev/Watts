import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function BulbModel() {
  const [hovered, setHovered] = useState(false)
  const groupRef = useRef(null)
  const glassMeshRef = useRef(null)
  const coilRefs = useRef([])
  const dotRef = useRef(null)
  const glowRef = useRef({
    glassIntensity: 0.3,
    glassOpacity: 0.85,
    coilBase: 1.5,
    dotIntensity: 0.8,
    rotSpeed: 0.008,
  })

  const bulbProfile = useMemo(() => {
    const profile = [
      [0.001, -1.4],
      [0.05, -1.35],
      [0.13, -1.2],
      [0.23, -0.95],
      [0.42, -0.6],
      [0.60, -0.25],
      [0.72, 0],
      [0.75, 0.15],
      [0.75, 0.35],
      [0.72, 0.55],
      [0.60, 0.78],
      [0.44, 0.95],
      [0.26, 1.08],
      [0.10, 1.15],
      [0.001, 1.18],
    ]
    return profile.map(([x, y]) => new THREE.Vector2(x, y))
  }, [])

  const bulbGeom = useMemo(() => new THREE.LatheGeometry(bulbProfile, 48), [bulbProfile])

  const filamentCoil = useMemo(() => {
    const pts = []
    const coils = 6
    const radius = 0.06
    for (let i = 0; i <= coils * 16; i++) {
      const t = i / (coils * 16)
      const angle = t * coils * Math.PI * 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = 0.45 + t * 0.5
      pts.push({ x, y, z })
    }
    return pts
  }, [])

  coilRefs.current = []

  useFrame(() => {
    const tgt = hovered
      ? { glassIntensity: 2.0, glassOpacity: 0.6, coilBase: 4.0, dotIntensity: 3.0, rotSpeed: 0.001 }
      : { glassIntensity: 0.3, glassOpacity: 0.85, coilBase: 1.5, dotIntensity: 0.8, rotSpeed: 0.008 }

    const s = 0.08
    const g = glowRef.current
    g.glassIntensity += (tgt.glassIntensity - g.glassIntensity) * s
    g.glassOpacity += (tgt.glassOpacity - g.glassOpacity) * s
    g.coilBase += (tgt.coilBase - g.coilBase) * s
    g.dotIntensity += (tgt.dotIntensity - g.dotIntensity) * s
    g.rotSpeed += (tgt.rotSpeed - g.rotSpeed) * s

    if (groupRef.current) {
      groupRef.current.rotation.y += g.rotSpeed
    }

    if (glassMeshRef.current) {
      glassMeshRef.current.material.emissiveIntensity = g.glassIntensity
      glassMeshRef.current.material.opacity = g.glassOpacity
    }

    const freq = hovered ? 0.005 : 0.003
    const pulse = Math.sin(Date.now() * freq) * (hovered ? 0.6 : 0.2)
    coilRefs.current.forEach((ref) => {
      if (ref) {
        ref.material.emissiveIntensity = g.coilBase + pulse
      }
    })

    if (dotRef.current) {
      dotRef.current.material.emissiveIntensity = g.dotIntensity
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} />
      <directionalLight position={[-3, 2, -4]} intensity={0.6} color="#D6AB34" />
      <mesh
        ref={glassMeshRef}
        geometry={bulbGeom}
        position={[0, 0.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        cursor="pointer"
      >
        <meshPhysicalMaterial
          color="#E8B830"
          transparent
          opacity={0.85}
          roughness={0.15}
          metalness={0}
          clearcoat={0.2}
          emissive="#D6AB34"
          emissiveIntensity={0.3}
          side={THREE.DoubleSide}
          envMapIntensity={0.4}
        />
      </mesh>

      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.45, 32]} />
        <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.25} />
      </mesh>

      <mesh position={[0, -0.72, 0]}>
        <cylinderGeometry args={[0.21, 0.24, 0.06, 32]} />
        <meshStandardMaterial color="#8B7355" metalness={0.7} roughness={0.4} />
      </mesh>

      <mesh position={[0, -0.83, 0]}>
        <cylinderGeometry args={[0.23, 0.26, 0.06, 32]} />
        <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.25} />
      </mesh>

      <mesh position={[0, -0.94, 0]}>
        <cylinderGeometry args={[0.25, 0.28, 0.06, 32]} />
        <meshStandardMaterial color="#8B7355" metalness={0.7} roughness={0.4} />
      </mesh>

      <mesh position={[0, -1.05, 0]}>
        <cylinderGeometry args={[0.27, 0.3, 0.06, 32]} />
        <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.25} />
      </mesh>

      <mesh position={[0, -1.16, 0]}>
        <cylinderGeometry args={[0.29, 0.32, 0.06, 32]} />
        <meshStandardMaterial color="#8B7355" metalness={0.7} roughness={0.4} />
      </mesh>

      <mesh position={[0, -1.27, 0]}>
        <cylinderGeometry args={[0.31, 0.35, 0.08, 32]} />
        <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.25} />
      </mesh>

      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.02, 32]} />
        <meshStandardMaterial color="#A0762C" metalness={0.8} roughness={0.2} />
      </mesh>

      <group position={[0, -0.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.55, 8]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[0.07, 0.05, 0.07]}>
          <cylinderGeometry args={[0.012, 0.012, 0.5, 8]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[-0.07, 0.05, -0.07]}>
          <cylinderGeometry args={[0.012, 0.012, 0.5, 8]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </mesh>

        {filamentCoil.map((pt, i) => (
          <mesh
            key={i}
            position={[pt.x, pt.y, pt.z]}
            ref={(el) => { coilRefs.current[i] = el }}
          >
            <sphereGeometry args={[0.018, 6, 6]} />
            <meshStandardMaterial
              color="#FDE047"
              emissive="#D6AB34"
              emissiveIntensity={1.5}
            />
          </mesh>
        ))}

        <mesh ref={dotRef} position={[0, 1.0, 0]}>
          <sphereGeometry args={[0.022, 8, 8]} />
          <meshStandardMaterial
            color="#FDBA20"
            emissive="#D6AB34"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {hovered && (
        <pointLight position={[0, 0.5, 0]} intensity={0.8} color="#FFD700" distance={4} />
      )}
    </group>
  )
}

export default function Lightbulb3D() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.7}
          rotateSpeed={0.6}
        />
        <BulbModel />
      </Canvas>
    </div>
  )
}
