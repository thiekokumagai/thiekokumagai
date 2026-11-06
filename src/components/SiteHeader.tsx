import { perfil } from "@/data/curriculo";

const links = [
  { href: "#sobre", label: "sobre" },
  { href: "#skills", label: "skills" },
  { href: "#experiencia", label: "experiência" },
  { href: "#projetos", label: "projetos" },
  { href: "#automacoes", label: "ia" },
  { href: "#contato", label: "contato" },
];

const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
    <div className="container flex h-14 items-center justify-between">
      <a href="#" className="font-mono text-sm font-medium text-primary">
        &lt;{perfil.nomeCurto.split(" ")[0]} /&gt;
      </a>
      <nav className="hidden gap-6 font-mono text-xs text-fg-secondary md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default SiteHeader;
