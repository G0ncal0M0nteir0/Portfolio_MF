"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const layers = ["image", "video"];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    let lastTime = 0;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastTime < 900) return; // snap timing

      lastTime = now;

      if (e.deltaY > 0) {
        setDirection(1);
        setIndex((prev) => (prev + 1) % layers.length);
      } else {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + layers.length) % layers.length);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          background: "#ffffff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 48px",
          boxSizing: "border-box",
        }}
      >
        <Image src="/images/mateus.svg" alt="Mateus" width={80} height={80} />

        <div style={{ display: "flex", gap: 80, alignItems: "center" }}>
          {["Portfólio", "Sobre", "Contactos"].map((label) => (
            <a
              key={label}
              href="#"
              style={{
                color: "#111",
                textDecoration: "none",
                fontSize: 19,
                fontWeight: 500,
                letterSpacing: "0.05em",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {label}
            </a>
          ))}
        </div>

        <Image src="/images/cubo.png" alt="Cubo" width={60} height={60} />
      </nav>

      {/* HERO STACK */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: `${layers.length * 100}vh`,
            transform: `translate3d(0, -${index * 100}vh, 0)`,
            transition: "transform 0.9s cubic-bezier(0.77, 0, 0.175, 1)",
            willChange: "transform",
            overflow: "hidden",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              height: "100vh",
              position: "relative",
              opacity: index === 0 ? 1 : 0.6,
              transition: "opacity 0.6s ease",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/content.png"
              alt="Content"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* VIDEO */}
          <div
            style={{
              height: "100vh",
              position: "relative",
              opacity: index === 1 ? 1 : 0.6,
              transition: "opacity 0.6s ease",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/videos/main_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}