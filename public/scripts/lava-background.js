import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function initLavaBackground({ darkMode = false } = {}) {
  const container = document.createElement('div');
  Object.assign(container.style, {
    position: 'fixed',
    inset: 0,
    zIndex: '0',
    pointerEvents: 'none',
    background: darkMode ? '#0f0f0f' : '#f2fbfd'
  });
  document.body.prepend(container);

  // Escena y cámara
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 5;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Luz
  const light = new THREE.PointLight(darkMode ? 0x80DEEA : 0x33bbff, 2.4, 25);
  light.position.set(0, 0, 5);
  scene.add(light);

  // Luz ambiente suave para resaltar bordes
  const ambient = new THREE.AmbientLight(darkMode ? 0x006064 : 0x99ccff, darkMode ? 0.4 : 0.6);
  scene.add(ambient);

  // Crear "burbujas"
  const bubbles = [];
  for (let i = 0; i < 12; i++) {
    const geom = new THREE.SphereGeometry(Math.random() * 0.7 + 0.4, 52, 52);
    const mat = new THREE.MeshStandardMaterial({
      color: darkMode ? 0x26C6DA : 0x00bcd4,
      transparent: true,
      opacity: darkMode ? 0.85 + Math.random() * 0.15 : 0.25 + Math.random() * 0.1,
      roughness: 0.4,
      metalness: 0.1,
      emissive: darkMode ? 0x006064 : 0x007a8a,
      emissiveIntensity: darkMode ? 0.3 : 0.5
    });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 7,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 2
    );
    scene.add(mesh);
    bubbles.push({
      mesh,
      speedX: 0.002 + Math.random() * 0.002,
      speedY: 0.0015 + Math.random() * 0.002,
      dirX: Math.random() > 0.5 ? 1 : -1,
      dirY: Math.random() > 0.5 ? 1 : -1
    });
  }

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    bubbles.forEach((b, i) => {
      b.mesh.position.x += Math.sin(t * 0.5 + i) * b.speedX * b.dirX;
      b.mesh.position.y += Math.cos(t * 0.7 + i) * b.speedY * b.dirY;

      // Rebote suave dentro de límites
      if (Math.abs(b.mesh.position.x) > 3) b.dirX *= -1;
      if (Math.abs(b.mesh.position.y) > 2.5) b.dirY *= -1;
    });

    renderer.render(scene, camera);
  }

  animate();

  // Responsividad
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Retornar cleanup si se necesita
  return () => {
    renderer.dispose();
    container.remove();
  };
}
