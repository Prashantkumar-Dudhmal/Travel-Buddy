import React from "react";

const LandingPage = () => {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial color="hotpink" />
      </mesh>
      <directionalLight position={[0, 10, 0]} intensity={1} />
    </>
  );
};

export default LandingPage;
