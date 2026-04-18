"use client";

import Navbar from "@/components/Navbar";

export default function Contactos() {
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

        {/* Red rectangle — center, with margins from all sides */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-20%, -45%)",
            width: "clamp(200px, 28vw, 340px)",
            height: "clamp(160px, 22vw, 270px)",
            background: "#C0392B",
            borderRadius: 2,
          }}
        />

        {/* Content — left side, vertically centered with the red rect */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 56,
            transform: "translateY(-55%)",
          }}
        >
          <h1
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(28px, 3vw, 44px)",
              color: "#111",
              margin: "0 0 14px 0",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Contactos
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {[
              { label: "mateus42nato@gmail.com", href: "mailto:mateus42nato@gmail.com" },
              { label: "@mateusfortunato", href: "https://instagram.com/mateusfortunato" },
              { label: "926001014", href: "tel:926001014" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(11px, 1vw, 14px)",
                  color: "#1a1a1a",
                  textDecoration: "none",
                  lineHeight: 1.9,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C0392B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}