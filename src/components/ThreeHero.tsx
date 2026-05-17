import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Abstract Shape: TorusKnot for organic cinematic flow
    const geometry = new THREE.TorusKnotGeometry(2, 0.6, 128, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xa3ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Inner glowing points
    const pointsGeo = new THREE.TorusKnotGeometry(2, 0.6, 128, 32);
    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.5
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa3ff00, 3);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00f2ff, 2);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    camera.position.z = 6;

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 1000;
      mouseY = (e.clientY - window.innerHeight / 2) / 1000;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      shape.rotation.y += 0.002;
      shape.rotation.x += 0.001;
      points.rotation.y += 0.002;
      points.rotation.x += 0.001;

      // Subtle mouse follow
      shape.rotation.x += (mouseY - shape.rotation.x) * 0.05;
      shape.rotation.y += (mouseX - shape.rotation.y) * 0.05;
      
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" id="three-canvas" />;
}
