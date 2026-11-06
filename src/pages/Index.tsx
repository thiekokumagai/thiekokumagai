import type { ReactNode } from "react";
import { ArrowUpRight, Cpu, Linkedin, Mail, MessageCircle, Terminal } from "lucide-react";
import { automacoes, competencias, destaques, experiencias, formacao, perfil, projetos, stats } from "@/data/curriculo";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import CountUp from "@/components/CountUp";

const Section = ({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) => (
  <section id={id} className="container scroll-mt-16 py-16">
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-widest text-primary">// {kicker}</p>
      <h2 className="mb-8 mt-2 font-display text-3xl font-bold md:text-4xl">{title}</h2>
    </Reveal>
    {children}
  </section>
);

const Index = () => (
  <>
    {/* HERO */}
    <section className="relative">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="container flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 font-mono text-xs text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            disponível para novos projetos
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-7xl">
            {perfil.nome.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-gradient">{perfil.nome.split(" ").slice(2).join(" ")}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 font-mono text-lg text-fg-secondary md:text-2xl">
            <span className="text-primary">&gt;</span>{" "}
            <Typewriter words={["Full Stack Developer", "Integrações & APIs", "Automação com n8n", "Soluções com IA"]} />
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-6 flex flex-wrap gap-2">
          {perfil.tags.map((t) => (
            <span
              key={t}
              className={
                destaques.includes(t)
                  ? "rounded-full border border-primary/60 bg-primary/15 px-3 py-1 font-mono text-xs font-semibold text-primary shadow-[0_0_14px_hsl(var(--primary)/0.4)]"
                  : "glass rounded-full px-3 py-1 font-mono text-xs text-fg-secondary"
              }
            >
              {t}
            </span>
          ))}
        </Reveal>
        <Reveal delay={0.4} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full shadow-[0_0_24px_hsl(var(--primary)/0.4)] sm:w-auto">
            <a href="#contato">Vamos conversar</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full border-primary/40 bg-transparent font-medium text-foreground hover:bg-primary/10 hover:text-primary sm:w-auto">
            <a href="#experiencia">Ver trajetória</a>
          </Button>
        </Reveal>
      </div>
    </section>

    {/* STATS */}
    <section className="container">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass rounded-xl p-5 text-center">
              <div className="text-gradient font-display text-4xl font-bold">
                <CountUp to={s.valor} suffix={s.sufixo} />
              </div>
              <p className="mt-1 font-mono text-xs text-fg-tertiary">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* SOBRE */}
    <Section id="sobre" kicker="01 · sobre" title="Resumo profissional">
      <Reveal>
        <div className="glass overflow-hidden rounded-xl">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2 font-mono text-xs text-fg-tertiary">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <Terminal className="ml-2 h-3.5 w-3.5" /> sobre.md
          </div>
          <div className="space-y-4 p-6 text-fg-secondary md:text-lg">
            {perfil.resumo.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>

    {/* SKILLS */}
    <Section id="skills" kicker="02 · stack" title="Competências técnicas">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {competencias.map((c, i) => (
          <Reveal key={c.titulo} delay={(i % 3) * 0.08}>
            <div className="glass h-full rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--glow)]">
              <h3 className="mb-3 font-mono text-sm font-medium uppercase tracking-wider text-primary">{c.titulo}</h3>
              <ul className="flex flex-wrap gap-2">
                {c.itens.map((it) => (
                  <li
                    key={it}
                    className={
                      destaques.includes(it)
                        ? "rounded-md border border-primary/60 bg-primary/15 px-2.5 py-1 text-sm font-semibold text-primary shadow-[0_0_14px_hsl(var(--primary)/0.35)]"
                        : "rounded-md bg-surface-muted px-2.5 py-1 text-sm text-fg-secondary"
                    }
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* EXPERIÊNCIA */}
    <Section id="experiencia" kicker="03 · trajetória" title="Experiência profissional">
      <div className="relative ml-2 border-l border-primary/30 pl-8">
        {experiencias.map((e) => (
          <Reveal key={e.empresa} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            <p className="font-mono text-xs text-primary">
              {e.periodo}
              {e.local && ` · ${e.local}`}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold">
              {e.cargo} <span className="text-fg-tertiary">@</span> {e.empresa}
            </h3>
            {e.link && (
              <a href={e.link} target="_blank" rel="noreferrer" className="font-mono text-xs text-accent hover:underline">
                {e.link}
              </a>
            )}
            <ul className="mt-3 space-y-1.5 text-fg-secondary">
              {e.itens.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* PROJETOS */}
    <Section id="projetos" kicker="04 · freelancer" title="Projetos">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((p, i) => (
          <Reveal key={p.nome} delay={(i % 3) * 0.08}>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="glass group block h-full rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{p.nome}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-fg-tertiary transition-colors group-hover:text-accent" />
              </div>
              <ul className="mt-3 space-y-1 text-sm text-fg-secondary">
                {p.itens.map((it) => (
                  <li key={it}>› {it}</li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* AUTOMAÇÕES */}
    <Section id="automacoes" kicker="05 · inteligência" title="Inteligência, automação e arquitetura">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-xl p-6">
          <Cpu className="absolute -right-6 -top-6 h-40 w-40 text-primary/10" />
          <ul className="relative grid gap-3 md:grid-cols-2">
            {automacoes.map((a) => (
              <li key={a} className="flex items-start gap-3 text-fg-secondary">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>

    {/* FORMAÇÃO */}
    <Section id="formacao" kicker="06 · formação" title="Formação">
      <Reveal>
        <div className="glass inline-block rounded-xl p-6">
          <h3 className="font-display text-xl font-semibold">{formacao.curso}</h3>
          <p className="mt-1 text-fg-secondary">
            {formacao.instituicao} · <span className="font-mono text-primary">{formacao.ano}</span>
          </p>
        </div>
      </Reveal>
    </Section>

    {/* CONTATO */}
    <Section id="contato" kicker="07 · contato" title="Vamos construir algo?">
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={perfil.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle /> {perfil.telefone}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full border-primary/40 bg-transparent font-medium text-foreground hover:bg-primary/10 hover:text-primary sm:w-auto">
            <a href={`mailto:${perfil.email}`}>
              <Mail /> {perfil.email}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full border-primary/40 bg-transparent font-medium text-foreground hover:bg-primary/10 hover:text-primary sm:w-auto">
            <a href={perfil.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> {perfil.linkedinUser}
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  </>
);

export default Index;
