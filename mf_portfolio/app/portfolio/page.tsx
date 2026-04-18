"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const projects = [
  {
    id: 0,
    title: "Ilustrações",
    description:
      "Conjunto de ilustrações desenvolvidas como uma sequência visual contínua, onde cada frame contribui para a construção de uma narrativa. Estas composições dão origem ao vídeo apresentado na página inicial, estabelecendo uma ligação entre imagem estática e movimento.",
    image: "/images/ilustracoes.png",
    color: "#C0392B",
  },
  {
    id: 1,
    title: "Fotografia",
    description:
      "Série fotográfica exploratória que documenta espaços urbanos e a relação entre luz e sombra. Cada imagem captura um instante efémero, construindo uma linguagem visual própria entre o real e o abstrato.",
    image: "/images/fotografia.png",
    color: "#555",
  },
  {
    id: 2,
    title: "Motion",
    description:
      "Projetos de animação e design em movimento que exploram a fluidez entre formas e transições. A narrativa é construída através do tempo, do ritmo e da transformação contínua dos elementos visuais.",
    image: "/images/motion.png",
    color: "#444",
  },
  {
    id: 3,
    title: "Identidade",
    description:
      "Desenvolvimento de sistemas de identidade visual para marcas e projetos culturais. O processo parte de conceitos sólidos e resulta em linguagens gráficas coerentes, adaptáveis e memoráveis.",
    image: "/images/identidade.png",
    color: "#3a3a3a",
  },
  {
    id: 4,
    title: "Editorial",
    description:
      "Projetos editoriais que exploram a relação entre texto, imagem e espaço gráfico. Cada publicação é pensada como um objeto coeso, onde a tipografia e o layout criam uma experiência de leitura única.",
    image: "/images/editorial.png",
    color: "#333",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <>
      <Navbar />

      {/* PORTFOLIO CONTENT */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "linear-gradient(180deg, #f5f5f5 0%, #c0c0c0 40%, #5a5a5a 70%, #1a1a1a 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >


        {/* Main content row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 80px",
            gap: 60,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* LEFT: text */}
          <div style={{ flex: "0 0 auto", maxWidth: 480 }}>
            <h1
              key={current.id + "-title"}
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(36px, 4vw, 56px)",
                color: "#ffffff",
                margin: "0 0 28px 0",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
                animation: "fadeSlideUp 0.5s ease forwards",
              }}
            >
              {current.title}
            </h1>
            <p
              key={current.id + "-desc"}
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75,
                margin: 0,
                animation: "fadeSlideUp 0.55s 0.06s ease forwards",
                opacity: 0,
              }}
            >
              {current.description}
            </p>
          </div>

          {/* RIGHT: image */}
          <div
            key={current.id + "-img"}
            style={{
              flex: "0 0 auto",
              width: "clamp(240px, 28vw, 380px)",
              aspectRatio: "1 / 1",
              background: current.color,
              borderRadius: 2,
              overflow: "hidden",
              animation: "fadeIn 0.5s ease forwards",
            }}
          >
            <img
              src={current.image}
              alt={current.title}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* BOTTOM: thumbnail nav dots */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            right: 80,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              title={p.title}
              style={{
                width: i === active ? 38 : 28,
                height: i === active ? 38 : 28,
                background:
                  i === active ? p.color : "rgba(255,255,255,0.22)",
                border: "none",
                borderRadius: 2,
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
                outline: "none",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}