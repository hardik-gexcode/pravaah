import { useEffect, useRef } from "react";
import * as THREE from "three";

type Ribbon = {
  mesh: THREE.Mesh;
  geo: THREE.PlaneGeometry;
  base: Float32Array;
  phase: number;
  speed: number;
  amp: number;
  freq: number;
  driftZ: number;
};

const PALETTE = [0x1b2a4a, 0xa97a2f, 0xa3512e, 0x4c7a5e];

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.1, 9.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ribbons: Ribbon[] = [];
    const W = 9.5,
      H = 2.1,
      SEG_X = 90,
      SEG_Y = 18;

    PALETTE.forEach((color, i) => {
      const geo = new THREE.PlaneGeometry(W, H, SEG_X, SEG_Y);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -0.18;
      mesh.rotation.z = (i - 1.5) * 0.05;
      mesh.position.set(0, (i - 1.5) * 0.42, -i * 0.35);
      group.add(mesh);
      ribbons.push({
        mesh,
        geo,
        base: Float32Array.from(geo.attributes.position.array),
        phase: i * 1.7,
        speed: 0.35 + i * 0.07,
        amp: 0.34 - i * 0.03,
        freq: 1.15 + i * 0.18,
        driftZ: 0,
      });
    });

    let raf = 0;
    let t = 0;
    let lastTime = performance.now();

    // gentle mouse parallax
    const target = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      t += dt * (prefersReduced ? 0.15 : 1);

      ribbons.forEach((r) => {
        const pos = r.geo.attributes.position;
        const arr = pos.array as Float32Array;
        const base = r.base;
        for (let idx = 0; idx < arr.length; idx += 3) {
          const x = base[idx];
          const y = base[idx + 1];
          // confluence: waves converge toward center (x=0) as they move right
          const convergence = THREE.MathUtils.clamp((x + W / 2) / W, 0, 1);
          const pull = (0 - y) * convergence * 0.55;
          const wave =
            Math.sin(x * r.freq + t * r.speed + r.phase) * r.amp * (0.4 + convergence * 0.6);
          arr[idx + 1] = y + pull * 0.5 + wave * 0.18;
          arr[idx + 2] = base[idx + 2] + Math.cos(x * 0.6 + t * r.speed * 0.7 + r.phase) * 0.12;
        }
        pos.needsUpdate = true;
      });

      group.rotation.y += (target.x * 0.18 - group.rotation.y) * 0.03;
      group.rotation.x += (-target.y * 0.06 - group.rotation.x) * 0.03;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      ribbons.forEach((r) => {
        r.geo.dispose();
        (r.mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
