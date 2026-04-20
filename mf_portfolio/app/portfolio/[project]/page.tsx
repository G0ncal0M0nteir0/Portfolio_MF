"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

import CabidesCoat from "@/components/projects/CabidesCoat";

const components: Record<string, React.FC> = {
  "cabides-coat": CabidesCoat,
  // por editar
  //fotografia: Fotografia,
  // por editar
  //motion: Motion,
  // por editar
  //identidade: Identidade,
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.project as string;

  const Component = components[slug];

  if (!Component) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "120px 80px", color: "#fff" }}>
          Projeto não encontrado.
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}