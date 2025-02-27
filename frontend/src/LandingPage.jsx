import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { degToRad } from "three/src/math/MathUtils.js";

import { CarWhite } from "./components/CarWhite";
import { CartoonMap } from "./components/Map";

const LandingPage = () => {
  const textRef = useRef();

  // Animation spring for floating effect
  const { position, scale } = useSpring({
    from: { position: [-3, 1, 0], scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ position: [-3, 1.2, 0], scale: 1.2 });
        await next({ position: [-3, 0.8, 0], scale: 1 });
      }
    },
    config: { tension: 50, friction: 30 },
  });

  return (
    <>
      <animated.mesh position={position} scale={scale}>
        <Text
          ref={textRef}
          font={"fonts/Poppins-Bold.ttf"}
          fontSize={1.3}
          lineHeight={0.8}
          letterSpacing={0.02}
          rotation-y={degToRad(20)}
        >
          TRAVEL{"\n"}BUDDY
        </Text>
      </animated.mesh>
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
