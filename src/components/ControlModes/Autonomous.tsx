import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface ModelProps {
  modelPath: string;
}

const Model: React.FC<ModelProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1} />;
};

const Autonomous: React.FC<{ src: string }> = ({ src }) => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model modelPath={src} />
      <OrbitControls />
    </Canvas>
  );
};


export default Autonomous;