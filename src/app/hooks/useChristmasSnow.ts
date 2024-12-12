// Adapted from https://codepen.io/radum/pen/xICAB
import { useEffect, useRef, useState, MutableRefObject } from "react";

type SnowflakeType = {
  x: number;
  y: number;
  vy: number;
  vx: number;
  r: number;
  o: number;
  reset: (width: number, height: number) => void;
};

export const useChristmasSnow = (
  containerRef: MutableRefObject<HTMLElement | null>
): [boolean, (active: boolean) => void] => {
  const [isActive, setIsActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const snowflakes = useRef<SnowflakeType[]>([]);
  const COUNT = 300;

  class Snowflake implements SnowflakeType {
    x: number;
    y: number;
    vy: number;
    vx: number;
    r: number;
    o: number;

    constructor(width: number, height: number) {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.vy = 1 + Math.random() * 3;
      this.vx = 0.5 - Math.random();
      this.r = 1 + Math.random() * 2;
      this.o = 0.5 + Math.random() * 0.5;
    }

    reset(width: number, height: number) {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.vy = 1 + Math.random() * 3;
      this.vx = 0.5 - Math.random();
      this.r = 1 + Math.random() * 2;
      this.o = 0.5 + Math.random() * 0.5;
    }
  }

  const onResize = () => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (container && canvas) {
      const width = container.clientWidth;
      const height = container.clientHeight;

      canvas.width = width;
      canvas.height = height;

      snowflakes.current.forEach((snowflake) => snowflake.reset(width, height));
    }
  };

  const update = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    if (!isActive) return;

    ctx.clearRect(0, 0, width, height);

    snowflakes.current.forEach((snowflake) => {
      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;

      ctx.globalAlpha = snowflake.o;
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();

      if (snowflake.y > height) {
        snowflake.reset(width, height);
      }
    });

    requestAnimationFrame(() => update(ctx, width, height));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    container.appendChild(canvas);

    const width = container.clientWidth;
    const height = container.clientHeight;

    for (let i = 0; i < COUNT; i++) {
      snowflakes.current.push(new Snowflake(width, height));
    }

    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "#FFF";

    const handleResize = () => onResize();
    window.addEventListener("resize", handleResize);

    if (isActive) {
      update(ctx, width, height);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, [isActive, containerRef]);

  return [isActive, setIsActive];
};
