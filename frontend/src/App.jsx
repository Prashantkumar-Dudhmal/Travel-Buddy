import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <color attach="background" args={["#171720"]} />
      <OrbitControls />
      <LandingPage />
      <ambientLight />
    </Canvas>
  );
}

export default App;
