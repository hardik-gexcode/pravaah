import { useEffect, useRef } from "react";
import gsap from "gsap";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: "gold" | "terracotta" | "navy";
};

const COLORS: Record<Particle["hue"], string> = {
  gold: "196,122,47",
  terracotta: "163,81,46",
  navy: "27,42,74",
};

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const lastSpawn = useRef(0);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch.current) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const setDotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3.out" });

    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);

      const now = performance.now();
      const speed = Math.hypot(e.movementX || 0, e.movementY || 0);
      if (now - lastSpawn.current > 22 && speed > 1.2) {
        lastSpawn.current = now;
        const hues: Particle["hue"][] = ["gold", "gold", "terracotta", "navy"];
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.5 + 0.15,
          life: 0,
          maxLife: 46 + Math.random() * 30,
          size: Math.random() * 2.2 + 0.9,
          hue: hues[Math.floor(Math.random() * hues.length)],
        });
        if (particles.current.length > 140) particles.current.shift();
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hovering = !!target.closest("[data-cursor-hover]");
      gsap.to(ring, { scale: hovering ? 1.9 : 1, duration: 0.35, ease: "power3.out" });
      gsap.to(dot, { scale: hovering ? 0.4 : 1, duration: 0.35, ease: "power3.out" });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        const t = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - t) * 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - t * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLORS[p.hue]},${alpha})`;
        ctx.fill();
      });
      particles.current = particles.current.filter((p) => p.life < p.maxLife);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch.current) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden md:block">
      <canvas ref={canvasRef} className="fixed inset-0" />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 -ml-3.5 -mt-3.5 h-7 w-7 rounded-full border border-[var(--color-gold)]/70"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-[var(--color-navy)]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
