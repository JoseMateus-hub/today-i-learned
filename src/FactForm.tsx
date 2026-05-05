import { useState } from "react";
import type { Fact } from "./types";
import { CATEGORIES } from "./types";

interface Props {
  onAdd: (fact: Omit<Fact, "id" | "votes_interesting" | "votes_mindblowing" | "votes_false" | "created_at">) => void;
}

export default function FactForm({ onAdd }: Props) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit() {
    if (!text.trim() || !source.trim() || !category) return;
    if (!source.startsWith("http")) {
      alert("Informe uma URL válida (começa com http)");
      return;
    }
    onAdd({ text, source, category });
    setText(""); setSource(""); setCategory("");
  }

  const inputClass =
    "w-full bg-white/6 border border-white/12 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-rose-500/60 transition-colors duration-150";

  return (
    <div className="mb-8 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5 flex flex-col gap-3">
      <h2 className="text-sm font-black uppercase tracking-widest text-white">
        ✦ Compartilhar um fato
      </h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={200}
        placeholder="Qual é o fato? (máx. 200 caracteres)"
        className={inputClass}
      />
      <span className="text-xs text-slate-500">{200 - text.length} caracteres restantes</span>

      <input
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="URL da fonte (https://...)"
        className={inputClass}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={inputClass + " cursor-pointer"}
      >
        <option value="" className="bg-zinc-900">Selecione a categoria</option>
        {CATEGORIES.filter((c) => c.value !== "all").map((c) => (
          <option key={c.value} value={c.value} className="bg-zinc-900">
            {c.label}
          </option>
        ))}
      </select>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white font-bold px-6 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer"
        >
          Publicar →
        </button>
      </div>
    </div>
  );
}