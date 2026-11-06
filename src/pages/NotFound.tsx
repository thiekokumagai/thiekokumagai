import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-2">
    <h1 className="font-display text-5xl font-bold">404</h1>
    <p className="text-fg-tertiary">Página não encontrada</p>
    <Link to="/" className="text-primary underline">Voltar ao início</Link>
  </div>
);

export default NotFound;
