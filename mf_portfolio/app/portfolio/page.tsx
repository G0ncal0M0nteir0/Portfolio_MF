"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const projects = [
  {
    id: 0,
    title: "Conjunto de Cabides Coat",
    description:
      "Produto desenvolvido a partir da reutilização de desperdícios. O projeto segue um processo inverso, onde o conhecimento do material direciona a forma e define o resultado final.",
    image: "/images/project1.png",
    slug: "cabides-coat",
  },
  {
    id: 1,
    title: "Fotografia",
    description:
      "Série fotográfica exploratória que documenta espaços urbanos e a relação entre luz e sombra.",
    image: "/images/fotografia.png",
    slug: "fotografia",
  },
  {
    id: 2,
    title: "Motion",
    description:
      "Projetos de animação e design em movimento que exploram a fluidez entre formas e transições.",
    image: "/images/motion.png",
    slug: "motion",
  },
  {
    id: 3,
    title: "Identidade",
    description:
      "Desenvolvimento de sistemas de identidade visual para marcas e projetos culturais.",
    image: "/images/identidade.png",
    slug: "identidade",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();
  const current = projects[active];

  return (
    <>
      <Navbar />

      {/* Full-screen image */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          cursor: "pointer",
          zIndex: 0,
        }}
        onClick={() => router.push(`/portfolio/${current.slug}`)}
      >
        <img
          key={current.id}
          src={current.image}
          alt={current.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            animation: "fadeIn 0.5s ease forwards",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 45%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Bottom-left: title + description */}
      <div
        style={{
          position: "fixed",
          bottom: 100,
          left: 80,
          zIndex: 10,
          pointerEvents: "none",
          maxWidth: 400,
        }}
      >
        <h1
          key={current.id + "-title"}
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontWeight: 400,
            fontSize: "clamp(32px, 3.5vw, 50px)",
            color: "#ffffff",
            margin: "0 0 10px 0",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            animation: "fadeSlideUp 0.5s ease forwards",
            maxWidth: 400,
          }}
        >
          {current.title}
        </h1>
        <p
          key={current.id + "-desc"}
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: "clamp(20px, 1vw, 35px)",
            color: "rgba(255,255,255,0.65)",
            margin: 0,
            lineHeight: 1.10,
            animation: "fadeSlideUp 0.55s 0.06s ease forwards",
            opacity: 0,
            maxWidth: 320, 
          }}
        >
          {current.description}
        </p>
      </div>

      {/* Bottom-center: nav squares */}
      <div
        style={{
          position: "fixed",
          bottom: 44,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          alignItems: "center",
          zIndex: 20,
        }}
      >
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={(e) => {
              e.stopPropagation();
              setActive(i);
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            title={p.title}
            style={{
              width: hovered === i ? 20 : 14,
              height: hovered === i ? 20 : 14,
              background: "#787575",
              border: "none",
              borderRadius: 0, 
              cursor: "pointer",
              transition: "all 0.2s ease",
              padding: 0,
              outline: "none",
              opacity: hovered === i || active === i ? 1 : 0.4,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}