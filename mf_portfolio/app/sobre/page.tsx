"use client";

import Navbar from "@/components/Navbar";

export default function Sobre() {
  return (
    <>
      <Navbar />

      <div
        style={{
          fontFamily: '"Instrument Serif", serif',
          background: "#000",
          color: "#fff",
          minHeight: "100vh",

          display: "flex",
          flexDirection: "column",

          padding: "30vh 80px",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            {/* LEFT COLUMN */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                paddingTop: "23vh", 
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(40px, 4vw, 64px)",
                  fontWeight: 420,
                  margin: 0,
                }}
              >
                Sobre
              </h1>

              <p
                style={{
                  fontSize: "clamp(24px, 1.1vw, 18px)",
                  lineHeight: 1.1,
                  margin: 0,
                  maxWidth: 400,
                  display: "block",
                }}
              >
                Olá sou o <em>Mateus.</em>
                <br />
                Desde de novo, o desenho sempre fez parte da minha vida,
                acompanhando-me em todas as fases do meu crescimento.
                <br />
                Com o tempo, este entusiasmo acabou por se fundir com o Design.
                <br />
                Ao longo da minha formação, desenvolvi várias ilustrações e
                projetos que foram cruciais para o meu crescimento pessoal e
                profissional.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                paddingTop: "0vh",
              }}
            >
              <img
                src="/images/MateusCara.png"
                alt="Mateus"
                style={{
                  width: "100%",
                  maxWidth: 420,
                  display: "block",
                }}
              />

              <p
                style={{
                  fontSize: "clamp(24px, 1.1vw, 18px)",
                  lineHeight: 1.1,
                  margin: 0,
                  maxWidth: 430,
                  display: "block",
                }}
              >
                Estes, permitiram-me evoluir tecnicamente e refinar o meu olhar,
                dando-me fundamentos para explorar e criar soluções visuais que
                unem a forma á funcionalidade.
                Hoje, continuo a explorar novas abordagens e a aprender de forma
                contínua, com a mesma dedicação e curiosidade que me acompanharam
                desde a minha génese.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}