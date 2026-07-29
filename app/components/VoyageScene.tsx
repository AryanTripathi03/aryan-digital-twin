"use client";

import { useEffect, useRef } from "react";

export type PerformanceMode = "full" | "balanced" | "minimal";

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
    const starCount = mode === "full" ? 82 : mode === "balanced" ? 50 : 28;
    const stars = Array.from({ length: starCount }, (_, index) => ({
      x: ((index * 73) % 997) / 997,
      y: ((index * 137) % 991) / 991,
      radius: 0.55 + ((index * 17) % 13) / 10,
      phase: index * 0.73,
    }));
    const route = [
      [0.08, 0.72],
      [0.24, 0.51],
      [0.41, 0.58],
      [0.58, 0.31],
      [0.76, 0.42],
      [0.92, 0.2],
    ];

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

    function draw(timestamp = 0) {
      const time = still ? 0 : timestamp * 0.00016;
      context.clearRect(0, 0, width, height);

      const wash = context.createRadialGradient(
        width * 0.62,
        height * 0.43,
        0,
        width * 0.62,
        height * 0.43,
        width * 0.64,
      );
      wash.addColorStop(0, "rgba(86,217,215,.12)");
      wash.addColorStop(0.48, "rgba(247,182,80,.055)");
      wash.addColorStop(1, "rgba(4,12,14,0)");
      context.fillStyle = wash;
      context.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        const alpha = still
          ? 0.4
          : 0.22 + (Math.sin(time * 9 + star.phase) + 1) * 0.18;
        context.beginPath();
        context.fillStyle = `rgba(221,243,237,${alpha})`;
        context.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2);
        context.fill();
      });

      context.save();
      context.lineWidth = 1.25;
      context.setLineDash([6, 11]);
      context.lineDashOffset = still ? 0 : -timestamp * 0.018;
      context.strokeStyle = "rgba(247,182,80,.46)";
      context.beginPath();
      route.forEach(([x, y], index) => {
        const px = x * width;
        const py = y * height;
        if (index === 0) {
          context.moveTo(px, py);
        } else {
          const [previousX, previousY] = route[index - 1];
          const controlX = ((previousX + x) / 2) * width;
          context.bezierCurveTo(
            controlX,
            previousY * height,
            controlX,
            py,
            px,
            py,
          );
        }
      });
      context.stroke();
      context.restore();

      route.forEach(([x, y], index) => {
        const px = x * width;
        const py = y * height;
        const pulse = still ? 0 : Math.sin(time * 12 + index) * 2;
        context.beginPath();
        context.fillStyle = index === route.length - 1 ? "#f7b650" : "#071114";
        context.strokeStyle = index === route.length - 1 ? "#f7b650" : "#56d9d7";
        context.lineWidth = 1.5;
        context.arc(px, py, 4.5 + pulse * 0.18, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.beginPath();
        context.strokeStyle = "rgba(86,217,215,.18)";
        context.arc(px, py, 13 + pulse, 0, Math.PI * 2);
        context.stroke();
      });

      const [finalX, finalY] = route[route.length - 1];
      const orbX = finalX * width;
      const orbY = finalY * height;
      const orb = context.createRadialGradient(orbX, orbY, 0, orbX, orbY, 74);
      orb.addColorStop(0, "rgba(247,182,80,.18)");
      orb.addColorStop(1, "rgba(247,182,80,0)");
      context.fillStyle = orb;
      context.beginPath();
      context.arc(orbX, orbY, 74, 0, Math.PI * 2);
      context.fill();

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
