"use client";

export default function CabidesCoat() {
  return (
    <div style={{ background: "#000", color: "#fff" }}>
      
      {/* HERO */}
      <div
        style={{
          position: "relative",
          height: "100vh",
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
              fontSize: "clamp(24px, 1vw, 15px)",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
            }}
          >
            
            Este projeto combina design, funcionalidade 
            e sustentabilidade
            através de cruzetas idealizadas 
            de cortes na oblíqua em tubos de cartão desperdiçados pela indústria.

          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "80px", display: "flex", flexDirection: "column", gap: 120 }}>

        {/* SECTION 1: IMAGE LEFT + TEXT RIGHT */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

          <img
            src="/images/mao_cruzeta.jpeg"
            alt=""
            style={{ width: "100%", display: "block" }}
          />

          <div>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "clamp(24px, 1.2vw, 22px)",
                lineHeight: 1.6,
                marginTop: 0,
              }}
            >
              O objetivo deste projeto consistiu no desenvolvimento de um objeto utilitário que respondesse à necessidade de redução 
              e reaproveitamento de desperdício industrial. 
              O desafio técnico passou pela exploração de tubos 
              de cartão, onde a geometria de corte foi a chave para a funcionalidade.
            </p>

            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "clamp(24px, 1.2vw, 22px)",
                lineHeight: 1.6,
                marginTop: 160,
              }}
            >
              
              Para a Obtenção da forma desejada, os tubos 
              de cartão são cortados na oblíqua originando silhuetas elípticas que posteriormente são cortadas 
              a meio para a estetica final.

            </p>
          </div>
        </div>

        {/* SECTION 2: TEXT LEFT + IMAGE RIGHT */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

          <div>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "clamp(24px, 1.2vw, 22px)",
                lineHeight: 1.6,
                marginTop: 0,
              }}
            >
              A estratégia passou por converter um material industrial cru e desvalorizado, num objeto 
              de design com elevado valor estético e funcional. 
              O foco foi criar um sistema de produção simplificado, onde a precisão técnica do corte reduz a necessidade de acabamentos complexos, garantindo a viabilidade de uma economia circular real.
            </p>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "clamp(24px, 1.2vw, 22px)",
                lineHeight: 1.6,
                marginTop: 139,
              }}
            >
              Um único tubo origina duas cruzetas. Além da estrutura, o projeto incluiu o desenvolvimento 
              de ganchos personalizados em arame, garantindo uma coerência formal e um sistema de produção simplificado e acessível.
            </p>
          </div>

          <img
            src="/images/duas_cruzetas.jpeg"
            alt=""
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* SECTION 3: TEXT ONLY (RIGHT ALIGNED WITH SECTION 2) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>

          <div /> {/* empty left spacer to align with image above */}

          <div>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: "clamp(24px, 1.2vw, 22px)",
                lineHeight: 1.6,
                marginTop: 0,
              }}
            >
              Optou-se por uma abordagem brutalista do objeto, mantendo a textura e a cor original do cartão para evidenciar a origem sustentável do produto.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}