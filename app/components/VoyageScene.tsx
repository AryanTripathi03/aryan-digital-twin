"use client";

import { useEffect, useRef } from "react";

export type PerformanceMode = "full" | "balanced" | "minimal";

type Puff = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  phase: number;
};

export function VoyageScene({ mode }: { mode: PerformanceMode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;
    const drawingContext = canvasElement.getContext("2d");
    if (!drawingContext) return;
    const canvas: HTMLCanvasElement = canvasElement;
    const context: CanvasRenderingContext2D = drawingContext;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const still = reduced || mode === "minimal";
    const puffCount = mode === "full" ? 22 : mode === "balanced" ? 14 : 8;
    const puffs: Puff[] = Array.from({ length: puffCount }, (_, index) => ({
      x: ((index * 83) % 997) / 997,
      y: 0.08 + (((index * 137) % 991) / 991) * 0.78,
      radius: 18 + ((index * 19) % 42),
      speed: 0.12 + ((index * 7) % 10) / 50,
      phase: index * 0.83,
    }));

    let width = 0;
    let height = 0;
    let animation = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function cloud(x: number, y: number, radius: number, drift: number) {
      context.save();
      context.translate(x + drift, y);
      context.fillStyle = "rgba(255,255,255,.72)";
      context.strokeStyle = "rgba(18,18,18,.13)";
      context.lineWidth = 1.25;
      context.beginPath();
      context.arc(-radius * 0.55, radius * 0.15, radius * 0.42, 0, Math.PI * 2);
      context.arc(0, 0, radius * 0.62, 0, Math.PI * 2);
      context.arc(radius * 0.62, radius * 0.2, radius * 0.44, 0, Math.PI * 2);
      context.fill();
      context.stroke();
      context.restore();
    }

    function draw(timestamp = 0) {
      const time = still ? 0 : timestamp * 0.001;
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        width * 0.72,
        height * 0.38,
        10,
        width * 0.72,
        height * 0.38,
        width * 0.34,
      );
      glow.addColorStop(0, "rgba(184,51,42,.12)");
      glow.addColorStop(0.38, "rgba(184,51,42,.04)");
      glow.addColorStop(1, "rgba(184,51,42,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      puffs.forEach((puff) => {
        const drift = still ? 0 : Math.sin(time * puff.speed + puff.phase) * 18;
        cloud(puff.x * width, puff.y * height, puff.radius, drift);
      });

      context.save();
      context.strokeStyle = "rgba(20,20,20,.24)";
      context.lineWidth = 2;
      context.lineCap = "round";
      context.setLineDash([2, 14]);
      context.lineDashOffset = still ? 0 : -timestamp * 0.02;
      context.beginPath();
      context.moveTo(-40, height * 0.74);
      context.bezierCurveTo(
        width * 0.2,
        height * 0.52 + Math.sin(time) * 14,
        width * 0.44,
        height * 0.92,
        width * 0.63,
        height * 0.55,
      );
      context.bezierCurveTo(
        width * 0.78,
        height * 0.22,
        width * 0.91,
        height * 0.62,
        width + 80,
        height * 0.25,
      );
      context.stroke();
      context.restore();

      const ringX = width * 0.76;
      const ringY = height * 0.32;
      const pulse = still ? 0 : Math.sin(time * 1.8) * 8;
      context.save();
      context.translate(ringX, ringY);
      context.rotate(still ? -0.08 : -0.08 + Math.sin(time * 0.3) * 0.04);
      context.strokeStyle = "rgba(178,48,39,.4)";
      context.lineWidth = 3;
      context.beginPath();
      context.ellipse(0, 0, 112 + pulse, 103 - pulse * 0.35, 0, 0, Math.PI * 2);
      context.stroke();
      context.strokeStyle = "rgba(18,18,18,.18)";
      context.lineWidth = 1;
      context.beginPath();
      context.ellipse(0, 0, 139 - pulse * 0.3, 130 + pulse, 0, 0, Math.PI * 2);
      context.stroke();
      context.restore();

      if (!still) animation = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, [mode]);

  return <canvas ref={canvasRef} className="voyage-scene" aria-hidden="true" />;
}
