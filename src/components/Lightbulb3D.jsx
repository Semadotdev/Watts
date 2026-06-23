import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text3D, Environment } from '@react-three/drei'
import * as THREE from 'three'

function BulbModel() {
  const [hovered, setHovered] = useState(false)
  const groupRef = useRef(null)
  const glassMeshRef = useRef(null)
  const glowSpriteRef = useRef(null)
  const glowRef = useRef({
    glassIntensity: 1.5,
    glassOpacity: 0.95,
    glowScale: 2.5,
    glowOpacity: 0.25,
    rotSpeed: 0.006,
  })

  const bulbProfile = useMemo(() => {
    const profile = [
      [0.001, -0.45],
      [0.06, -0.42],
      [0.15, -0.36],
      [0.25, -0.28],
      [0.35, -0.18],
      [0.45, -0.05],
      [0.53, 0.08],
      [0.60, 0.22],
      [0.64, 0.35],
      [0.66, 0.48],
      [0.66, 0.60],
      [0.63, 0.72],
      [0.57, 0.82],
      [0.48, 0.90],
      [0.36, 0.96],
      [0.22, 1.00],
      [0.10, 1.02],
      [0.001, 1.03],
    ]
    return profile.map(([x, y]) => new THREE.Vector2(x, y))
  }, [])

  const glassGeom = useMemo(() => new THREE.LatheGeometry(bulbProfile, 48), [bulbProfile])

  const glowTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0.35)')
    gradient.addColorStop(0.4, 'rgba(214, 171, 52, 0.15)')
    gradient.addColorStop(0.7, 'rgba(214, 171, 52, 0.04)')
    gradient.addColorStop(1, 'rgba(214, 171, 52, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 256, 256)
    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }, [])

  const baseSegments = useMemo(() => [
    { y: 0.04, top: 0.20, bottom: 0.22, h: 0.08, color: '#2a2a2a' },
    { y: -0.06, top: 0.22, bottom: 0.20, h: 0.08, color: '#1a1a1a' },
    { y: -0.16, top: 0.20, bottom: 0.18, h: 0.08, color: '#1a1a1a' },
    { y: -0.26, top: 0.18, bottom: 0.16, h: 0.08, color: '#1a1a1a' },
    { y: -0.36, top: 0.16, bottom: 0.14, h: 0.08, color: '#1a1a1a' },
  ], [])

  useFrame(() => {
    const tgt = hovered
      ? { glassIntensity: 4.0, glassOpacity: 0.95, glowScale: 3.5, glowOpacity: 0.4, rotSpeed: 0.001 }
      : { glassIntensity: 0.2, glassOpacity: 0.9, glowScale: 2.5, glowOpacity: 0.25, rotSpeed: 0.006 }

    const s = 0.08
    const g = glowRef.current
    g.glassIntensity += (tgt.glassIntensity - g.glassIntensity) * s
    g.glassOpacity += (tgt.glassOpacity - g.glassOpacity) * s
    g.glowScale += (tgt.glowScale - g.glowScale) * s
    g.glowOpacity += (tgt.glowOpacity - g.glowOpacity) * s
    g.rotSpeed += (tgt.rotSpeed - g.rotSpeed) * s

    if (groupRef.current) {
      groupRef.current.rotation.y += g.rotSpeed
    }

    if (glassMeshRef.current) {
      glassMeshRef.current.material.emissiveIntensity = g.glassIntensity
      glassMeshRef.current.material.opacity = g.glassOpacity
    }

    if (glowSpriteRef.current) {
      glowSpriteRef.current.material.opacity = g.glowOpacity
      glowSpriteRef.current.scale.setScalar(g.glowScale)
    }
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 5]} intensity={2.0} color="#FFF5E6" />
      <directionalLight position={[-3, 2, -4]} intensity={0.8} color="#FFFFFF" />
      <directionalLight position={[-2, -4, 3]} intensity={0.5} color="#E8D85C" />

      <Environment preset="studio" />

      <sprite ref={glowSpriteRef} position={[0, 0.28, -0.3]} scale={[2.5, 2.5, 1]}>
        <spriteMaterial map={glowTexture} transparent opacity={0.25} depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>

      <group ref={groupRef}>
      <mesh
        ref={glassMeshRef}
        geometry={glassGeom}
        position={[0, 0.55, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        cursor="pointer"
      >
        <meshPhysicalMaterial
          color="#FFD700"
          transparent
          opacity={0.95}
          roughness={0.4}
          metalness={0}
          emissive="#D6AB34"
          emissiveIntensity={1.5}
          side={THREE.DoubleSide}
          envMapIntensity={0.3}
        />
      </mesh>

      <Text3D
        font="/fonts/helvetiker_bold.typeface.json"
        position={[-0.4, 0.55, -0.1]}
        size={0.65}
        height={0.15}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.01}
        bevelSegments={3}
      >
        W
        <meshStandardMaterial
          color="#000000"
          metalness={0.85}
          roughness={0.25}
        />
      </Text3D>

      {baseSegments.map((seg, i) => (
        <mesh key={`base-${i}`} position={[0, seg.y, 0]}>
          <cylinderGeometry args={[seg.top, seg.bottom, seg.h, 32]} />
          <meshStandardMaterial color={seg.color} metalness={0.9} roughness={0.2} />
        </mesh>
      ))}

      <mesh position={[0, -0.47, 0]}>
        <coneGeometry args={[0.14, 0.14, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
      </mesh>

      {hovered && (
        <pointLight position={[0, 0.8, 0.3]} intensity={1.2} color="#FFD700" distance={5} />
      )}
      </group>
    </>
  )
}

export default function Lightbulb3D() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto">
      <Canvas
        camera={{ position: [0, 0.28, 5.0], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.7}
          rotateSpeed={0.6}
          target={[0, 0.28, 0]}
        />
        <BulbModel />
      </Canvas>
    </div>
  )
}
