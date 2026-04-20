"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Portfólio", href: "/portfolio" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contactos", href: "/contactos" },
  ];

  return (
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
        padding: "10px 48px", 
        boxSizing: "border-box",
      }}
    >
      <Link href="/">
        <Image
          src="/images/mateus.svg"
          alt="Mateus"
          width={110}  
          height={110} 
          style={{ cursor: "pointer" }}
        />
      </Link>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              style={{
                color: isActive ? "#000000" : "#111",
                textDecoration: "none",
                fontSize: 19,
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 500,
                letterSpacing: "0.05em",
                transition: "transform 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {label}
            </Link>
          );
        })}
      </div>

      <Image src="/images/cubo.png" alt="Cubo" width={38} height={38} /> {/* ← square size (was 60) */}
    </nav>
  );
}