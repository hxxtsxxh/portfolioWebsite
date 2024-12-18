import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SantaHat = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'models/santa_hat.glb',
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1}>
      <primitive object={scene} />
    </mesh>
  );
};

export default SantaHat;
