import { perfil } from "@/data/curriculo";

const SiteFooter = () => (
  <footer className="border-t border-border/60 py-6 text-center font-mono text-xs text-fg-tertiary">
    © {new Date().getFullYear()} {perfil.nomeCurto} · construído com React + Vite
  </footer>
);

export default SiteFooter;
