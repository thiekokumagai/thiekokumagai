import type { ReactNode } from "react";
import { automacoes, certificados, competencias, experiencias, formacao, indicacao, perfil, projetos } from "@/data/curriculo";

// Versão de impressão do currículo (rota /pdf). Coluna única, texto puro e links reais,
// para o PDF ser lido por ATS. Todo o conteúdo vem de src/data/curriculo.ts.

const Titulo = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-1.5 mt-4 border-b border-black pb-0.5 text-[11px] font-bold uppercase tracking-wider">{children}</h2>
);

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="text-black underline">
    {children}
  </a>
);

const Pdf = () => (
  <div className="min-h-screen bg-white p-8 text-[12px] leading-snug text-black [&_*]:[font-family:Arial,Helvetica,sans-serif] print:min-h-0 print:p-0">
    <header>
      <h1 className="text-xl font-bold uppercase">{perfil.nome}</h1>
      <p className="mt-0.5 font-semibold">{perfil.cargo}</p>
      <p className="mt-0.5">
        {perfil.telefone} · <Link href={`mailto:${perfil.email}`}>{perfil.email}</Link> · <Link href={perfil.linkedin}>{perfil.linkedin.replace("https://www.", "")}</Link>
      </p>
    </header>

    <Titulo>Resumo profissional</Titulo>
    {perfil.resumo.map((p) => (
      <p key={p} className="mb-1">
        {p}
      </p>
    ))}

    <Titulo>Competências técnicas</Titulo>
    <ul className="space-y-0.5">
      {competencias.map((c) => (
        <li key={c.titulo}>
          <strong>{c.titulo}:</strong> {c.itens.join(", ")}
        </li>
      ))}
    </ul>

    <Titulo>Experiência profissional</Titulo>
    {experiencias.map((e) => (
      <div key={e.empresa} className="mb-2 break-inside-avoid">
        <p className="font-semibold">
          {e.cargo} — {e.empresa} <span className="font-normal">| {e.periodo}{e.local && ` | ${e.local}`}</span>
        </p>
        {e.link && (
          <p>
            <Link href={e.link}>{e.link}</Link>
          </p>
        )}
        <ul className="ml-4 list-disc">
          {e.itens.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    ))}

    <Titulo>Projetos freelancer</Titulo>
    <ul className="space-y-0.5">
      {projetos.map((p) => (
        <li key={p.nome} className="break-inside-avoid">
          <strong>{p.nome}</strong> (<Link href={p.link}>{p.link}</Link>): {p.itens.join("; ")}
        </li>
      ))}
    </ul>

    <Titulo>Automação, IA e arquitetura</Titulo>
    <ul className="ml-4 list-disc">
      {automacoes.map((a) => (
        <li key={a}>{a}</li>
      ))}
    </ul>

    <Titulo>Certificados</Titulo>
    <ul className="ml-4 list-disc">
      {certificados.map((c) => (
        <li key={c.nome}>
          {c.nome} — {c.emissor}, {c.data}
        </li>
      ))}
    </ul>

    <Titulo>Formação</Titulo>
    <p>
      {formacao.curso} — {formacao.instituicao} ({formacao.ano})
    </p>

    <Titulo>Indicação</Titulo>
    <p>
      Indicado por {indicacao.nome} (<Link href={`mailto:${indicacao.email}`}>{indicacao.email}</Link>)
    </p>
  </div>
);

export default Pdf;
