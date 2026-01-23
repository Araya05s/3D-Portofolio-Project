import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Diamonds = ({ ...props }) => {
    const diamondRef = React.useRef()

    useFrame(({ clock }) => {
        if (diamondRef.current) {
            const time = clock.getElapsedTime()
            diamondRef.current.rotation.y = time * 0.5
        }
    })

    return (
        <mesh {...props} ref={diamondRef} dispose={null}>
            <octahedronGeometry args={[1.5, 0]} />
            <meshPhysicalMaterial transmission={0.7} roughness={0.1} thickness={2} color={"#8A2BE2"} />
        </mesh>
    )
}

export default Diamonds