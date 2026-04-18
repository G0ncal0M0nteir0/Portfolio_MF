"use client";

import Navbar from "@/components/Navbar";

export default function Sobre() {
  return (
    <>
      <Navbar />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "linear-gradient(180deg, #f5f5f5 0%, #c0c0c0 40%, #5a5a5a 70%, #1a1a1a 100%)",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(80,80,80,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(80,80,80,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "48px 32px",
            pointerEvents: "none",
          }}
        />

        {/* Red square — top right with margin from navbar and edge */}
        <div
          style={{
            position: "absolute",
            top: 130,
            right: 80,
            width: "clamp(140px, 16vw, 220px)",
            aspectRatio: "1 / 1",
            background: "#C0392B",
            borderRadius: 2,
          }}
        />

        {/* Content — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 56,
            maxWidth: "72vw",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(32px, 3.5vw, 50px)",
              color: "#ffffff",
              margin: "0 0 6px 0",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Sobre
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "clamp(11px, 1vw, 13px)",
              color: "#ffffff",
              margin: "0 0 14px 4px",
            }}
          >
            Olá sou o <em>Mateus.</em>
          </p>

          {/* Two-column body text */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0 40px",
              maxWidth: "620px",
            }}
          >
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(11px, 0.95vw, 13px)",
                color: "#ffffff",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Desde de novo, o desenho sempre fez parte da minha vida,
              acompanhando-me em todas as fases do meu crescimento. Com o
              tempo, este entusiasmo acabou por se fundir com o Design.
              <br />
              <br />
              Ao longo da minha formação, desenvolvi várias ilustrações e
              projetos que foram cruciais para o meu crescimento pessoal e
              profissional.
            </p>

            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(11px, 0.95vw, 13px)",
                color: "#ffffff",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Estes, permitiram-me evoluir tecnicamente e refinar o meu olhar,
              dando-me fundamentos para explorar e criar soluções visuais que
              unem a forma à funcionalidade.
              <br />
              <br />
              Hoje, continuo a explorar novas abordagens e a aprender de forma
              contínua, com a mesma dedicação e curiosidade que me
              acompanharam desde a minha génese.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}