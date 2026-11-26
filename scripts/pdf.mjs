// Gera curriculo.pdf a partir da rota /pdf do próprio site (Chrome headless via Playwright).
// Uso: npm run pdf  (faz o build e depois chama este script)
import { preview } from "vite";
import { chromium } from "playwright-core";
import { readFile } from "node:fs/promises";

const MAX_PAGINAS = 2;
const saida = new URL("../curriculo.pdf", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

const server = await preview({ preview: { port: 4173, strictPort: false, open: false } });
const base = server.resolvedUrls?.local?.[0] ?? "http://localhost:4173/";

let browser;
try {
  browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage();
  await page.goto(new URL("pdf", base).href, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: saida,
    format: "A4",
    margin: { top: "12mm", bottom: "12mm", left: "14mm", right: "14mm" },
    printBackground: false,
  });
} finally {
  await browser?.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}

const bruto = (await readFile(saida)).toString("latin1");
const paginas = (bruto.match(/\/Type\s*\/Page[^s]/g) ?? []).length;
console.log(`PDF gerado: ${saida} (${paginas} página${paginas === 1 ? "" : "s"})`);
if (paginas > MAX_PAGINAS) {
  console.error(`Erro: o PDF tem ${paginas} páginas; o limite é ${MAX_PAGINAS}.`);
  process.exit(1);
}
