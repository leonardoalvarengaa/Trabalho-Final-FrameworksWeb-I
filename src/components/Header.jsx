// src/components/Header.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Header() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // carrega o valor inicial da URL sem setar durante o render
  useEffect(() => {
    const initial = params.get("q") || "";
    setQ(initial);
  }, [params]);

  function submit(e) {
    e.preventDefault();
    const sp = new URLSearchParams();
    if (q.trim()) sp.set("q", q.trim());
    // navega mantendo a busca na query string
    navigate(`/?${sp.toString()}`);
  }

  return (
    <header className="header">
      <div className="brand">
        <div className="brand__logo" aria-hidden>
          🎬
        </div>
        <h1 className="brand__title">TMDB Explorer</h1>
      </div>

      <form className="search" onSubmit={submit}>
        <input
          placeholder="Buscar filme..."
          aria-label="Buscar filme"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
}
