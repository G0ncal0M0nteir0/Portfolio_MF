"use client";

export default function CabidesCoat() {
  return (
    <div style={{ background: "#000", color: "#fff" }}>
      
      {/* HERO */}
      <div
        style={{
          position: "relative",
          height: "90vh",
          width: "100%",
        }}
      >
        <img
          src="/images/project1.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay text */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            maxWidth: 420,
          }}
        >
          <h1
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(36px, 4vw, 60px)",
              fontWeight: 400,
              margin: "0 0 12px 0",
            }}
          >
            Conjunto de Cabides Coat
          </h1>

          <p
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: "clamp(13px, 1vw, 15px)",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
            }}
          >
            Este projeto combina design, funcionalidade e sustentabilidade através
            de cruzetas utilizadas de cartão.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div
        style={{
          padding: "80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
        }}
      >
        {/* LEFT TEXT */}
        <div>
          <p style={{ lineHeight: 1.6 }}>
            A estratégia passou por converter um material industrial que
            desvalorizado, num objeto de design com elevado valor estético e
            funcional.
          </p>

          <p style={{ marginTop: 40, lineHeight: 1.6 }}>
            Um único tubo origina duas cruzetas. Além da estrutura, o projeto
            inclui o desenvolvimento de ganchos personalizados em arame.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/images/project1_detail1.png"
            alt=""
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* LEFT IMAGE */}
        <div>
          <img
            src="/images/project1_detail2.png"
            alt=""
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div>
          <p style={{ lineHeight: 1.6 }}>
            O objetivo deste projeto consistiu no desenvolvimento de um objeto
            utilitário que respondesse à necessidade de redução e reaproveitamento
            de desperdício industrial.
          </p>

          <p style={{ marginTop: 40, lineHeight: 1.6 }}>
            Optou-se por uma abordagem brutalista do objeto, mantendo a textura e
            a cor original do cartão.
          </p>
        </div>
      </div>
    </div>
  );
}