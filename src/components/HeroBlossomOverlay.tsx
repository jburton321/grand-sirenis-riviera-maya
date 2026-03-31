import { useEffect, useRef } from 'react';

const blossomCount = 50;
const focalLength = 400;

export function HeroBlossomOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let blossoms: Blossom[] = [];
    let rafId = 0;
    let stopped = false;

    class Blossom {
      x!: number;
      y!: number;
      z!: number;
      size!: number;
      vY!: number;
      vX!: number;
      rotationX!: number;
      rotationY!: number;
      rotationZ!: number;
      vRotX!: number;
      vRotY!: number;
      vRotZ!: number;

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = (Math.random() - 0.5) * 1500;
        this.y = initial ? (Math.random() - 0.5) * 1000 : -height;
        this.z = Math.random() * 800;
        this.size = 15;
        this.vY = Math.random() * 1 + 1;
        this.vX = Math.random() * 2 - 1;
        this.rotationX = Math.random() * Math.PI;
        this.rotationY = Math.random() * Math.PI;
        this.rotationZ = Math.random() * Math.PI;
        this.vRotX = Math.random() * 0.02;
        this.vRotY = Math.random() * 0.02;
        this.vRotZ = Math.random() * 0.02;
      }

      drawFlower(context: CanvasRenderingContext2D, s: number) {
        context.beginPath();
        for (let a = 0; a < Math.PI * 2; a += 0.2) {
          const r = s * (Math.abs(Math.cos(2.5 * a)) + 0.3);
          const x = r * Math.cos(a);
          const y = r * Math.sin(a);
          context.lineTo(x, y);
        }
        context.closePath();
        const grad = context.createRadialGradient(0, 0, 0, 0, 0, s);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, '#ffdae0');
        grad.addColorStop(1, '#f19db1');
        context.fillStyle = grad;
        context.fill();
      }

      update() {
        this.y += this.vY;
        this.x += this.vX + Math.sin(this.y / 100);
        this.rotationX += this.vRotX;
        this.rotationY += this.vRotY;
        this.rotationZ += this.vRotZ;
        if (this.y > height + 200) this.reset();
      }

      render() {
        const scale = focalLength / (focalLength + this.z);
        const screenX = this.x * scale + width / 2;
        const screenY = this.y * scale + height / 2;
        const currentSize = this.size * scale;
        if (screenX < -100 || screenX > width + 100 || screenY > height + 100) return;

        ctx.save();
        ctx.translate(screenX, screenY);
        ctx.rotate(this.rotationZ);
        ctx.scale(Math.cos(this.rotationY), Math.sin(this.rotationX));
        ctx.globalAlpha = Math.min(1, scale * 1.5);
        this.drawFlower(ctx, currentSize);
        ctx.restore();
      }
    }

    function init() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 1 || h < 1) return;
      // Logical size for simulation; buffer scaled for sharp rendering on mobile retina.
      width = w;
      height = h;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      blossoms = Array.from({ length: blossomCount }, () => new Blossom());
    }

    function loop() {
      if (stopped) return;
      ctx.clearRect(0, 0, width, height);
      blossoms.sort((a, b) => b.z - a.z);
      blossoms.forEach((b) => {
        b.update();
        b.render();
      });
      rafId = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(() => {
      init();
    });
    ro.observe(container);
    init();
    loop();

    return () => {
      stopped = true;
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden bg-transparent"
      aria-hidden
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
