import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Pdf from "@/pages/Pdf";
import { experiencias, indicacao, perfil, projetos } from "@/data/curriculo";

describe("página /pdf", () => {
  it("mostra contato, indicação e links reais vindos do curriculo.ts", () => {
    render(<Pdf />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(perfil.nome);
    expect(screen.getByRole("link", { name: perfil.email })).toHaveAttribute("href", `mailto:${perfil.email}`);
    expect(screen.getByRole("link", { name: indicacao.email })).toHaveAttribute("href", `mailto:${indicacao.email}`);
    for (const p of projetos) {
      expect(screen.getByRole("link", { name: p.link })).toHaveAttribute("href", p.link);
    }
  });

  it("lista todas as experiências", () => {
    render(<Pdf />);
    for (const e of experiencias) {
      expect(screen.getByText(new RegExp(e.empresa))).toBeInTheDocument();
    }
  });
});
