import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Dog = () => {
  const scene = useGLTF("/models/dog.drc.glb");

  
  return (
    <>
      <primitive object={scene} />
      <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={10} />
      <OrbitControls />
    </>
  );
};

export default Dog;
