/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 rocket.gltf 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/space-rocket-9c1989ace76e42e987114297edea117f
Title: Space Rocket
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/assets/rocket/rocket.gltf");
  const modelRef = useRef(null); //creating reference to access the DOM element

  useFrame(() => {
    modelRef.current.rotation.y += 0.01; //adding rotation using useFrame hook
  });
  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group rotation={[0, -Math.PI / 4, 0]}>
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group rotation={[0, Math.PI / 4, 0]}>
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group rotation={[-Math.PI, Math.PI / 4, -Math.PI]}>
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}>
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        position={[0, 0.332, 0.358]}
        rotation={[1.396, 0, 0]}
        scale={[0.166, 0.107, 0.166]}
      >
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials["Material.001"]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials["Material.001"]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/assets/rocket/rocket.gltf");
