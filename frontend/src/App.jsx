import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <LandingPage />
      <ambientLight />
    </Canvas>
  );
}

export default App;
