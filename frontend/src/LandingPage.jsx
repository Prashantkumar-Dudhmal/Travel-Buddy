import React from "react";
import { Text } from "@react-three/drei";
import { CarWhite } from "./components/CarWhite";
import { degToRad } from "three/src/math/MathUtils.js";
import { CartoonMap } from "./components/Map";

const LandingPage = () => {
  return (
    <>
      <Text
        font={"fonts/Alkatra-VariableFont_wght.ttf"}
        position={[-3, 1, 0]}
        fontSize={1.3}
        lineHeight={1}
        letterSpacing={0.02}
        rotation-y={degToRad(20)}
      >
        TRAVEL{"\n"}BUDDY
      </Text>
      {
        //Car initial position 15,0,-5 and rotation-y -90
      }
      <CarWhite position={[-2, -1.5, 2]} rotation-y={degToRad(65)} />
      <CartoonMap
        position={[1, -1, 1]}
        rotation-y={degToRad(-105)}
        scale={0.5}
      />

      <directionalLight position={[5, 10, 5]} intensity={1} />
    </>
  );
};

export default LandingPage;
