import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { perfil } from "@/data/curriculo";

const links = [
  { href: "#sobre", label: "sobre" },
  { href: "#skills", label: "skills" },
  { href: "#experiencia", label: "experiência" },
  { href: "#projetos", label: "projetos" },
  { href: "#automacoes", label: "ia" },
  { href: "#contato", label: "contato" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between">
        <a href="#" onClick={() => setOpen(false)} className="font-mono text-sm font-medium text-primary">
          &lt;{perfil.nomeCurto.split(" ")[0]} /&gt;
        </a>

        <nav className="hidden gap-6 font-mono text-xs text-fg-secondary md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 text-primary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-x-0 top-14 z-40 flex h-[calc(100vh-3.5rem)] flex-col gap-1 bg-background/95 p-6 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 font-mono text-lg text-fg-secondary transition-colors hover:text-primary"
            >
              <span className="text-primary">&gt;</span> {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
