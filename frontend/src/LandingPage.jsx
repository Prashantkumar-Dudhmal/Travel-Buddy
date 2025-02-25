import React from "react";
import { Text } from "@react-three/drei";
import { CarWhite } from "./components/CarWhite";
import { degToRad } from "three/src/math/MathUtils.js";

const LandingPage = () => {
  return (
    <>
      <Text
        font={"fonts/Alkatra-VariableFont_wght.ttf"}
        position={[-3, 1, 0]}
        fontSize={0.8}
        rotation-y={degToRad(20)}
      >
        TRAVEL-BUDDY
      </Text>
      {
        //Car initial position 15,0,-5 and rotation-y -90
      }
      <CarWhite position={[-2, -1.5, 2]} rotation-y={degToRad(65)} />
      <mesh position={[2, 0, 1]} rotation-y={degToRad(-20)}>
        <boxGeometry args={[4, 4, 1]} />
        <meshLambertMaterial color="hotpink" />
      </mesh>
      <directionalLight position={[5, 10, 5]} intensity={1} />
    </>
  );
};

export default LandingPage;
