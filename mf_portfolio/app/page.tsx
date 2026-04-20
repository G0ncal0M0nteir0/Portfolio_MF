"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const layers = ["image", "video"];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    let lastTime = 0;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastTime < 900) return;

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
      <Navbar />

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
            
            <img
              src="/images/main_image.png"
              alt="Overlay"
              style={{
                position: "absolute",
                bottom: -15,
                left: "50%",
                transform: "translateX(-50%)",
                width: "clamp(200px, 55vw, 700px)", 
                zIndex: 5,
                pointerEvents: "none",
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
                transform: "scale(1.25)", 
                transformOrigin: "center center",
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