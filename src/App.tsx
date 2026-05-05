import { useState } from "react";
import type { Fact } from "./types";
import { CATEGORIES } from "./types";
import NewItem from "./NewItem";
import FactForm from "./FactForm";

const INITIAL_FACTS: Fact[] = [
  {
    id: 1,
    text: "A Digital College tem o melhor curso de programação do Brasil",
    source: "https://www.digitalcollege.com.br/",
    category: "tecnologia",
    votes_interesting: 15,
    votes_mindblowing: 1,
    votes_false: 0,
    created_at: "2026-05-05",
  },
  {
    id: 2,
    text: "Neymar é acusado de tentativa de homicídio estimulada por racismo contra pessoa negra",
    source: "https://g1.com",
    category: "esporte",
    votes_interesting: 0,
    votes_mindblowing: 0,
    votes_false: 1,
    created_at: "2026-05-04",
  },
  {
    id: 3,
    text: "Virginia foi para a balada com o Zé Felipe e houve troca de afetos.",
    source: "https://leodias.com",
    category: "entretenimento",
    votes_interesting: 2,
    votes_mindblowing: 3,
    votes_false: 5,
    created_at: "2026-04-01",
  },
];

export default function App() {
  const [facts, setFacts] = useState<Fact[]>(INITIAL_FACTS);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const filteredFacts =
    activeCategory === "all"
      ? facts
      : facts.filter((f) => f.category.toLowerCase() === activeCategory.toLowerCase());

  function handleVote(id: number, type: "interesting" | "mindblowing" | "false") {
    setFacts((prev) =>
      prev.map((f) => {
        if (f.id !== id) return f;
        return {
          ...f,
          votes_interesting: type === "interesting" ? f.votes_interesting + 1 : f.votes_interesting,
          votes_mindblowing: type === "mindblowing" ? f.votes_mindblowing + 1 : f.votes_mindblowing,
          votes_false: type === "false" ? f.votes_false + 1 : f.votes_false,
        };
      })
    );
  }

  function handleAddFact(
    newFact: Omit<Fact, "id" | "votes_interesting" | "votes_mindblowing" | "votes_false" | "created_at">
  ) {
    const fact: Fact = {
      ...newFact,
      id: Date.now(),
      votes_interesting: 0,
      votes_mindblowing: 0,
      votes_false: 0,
      created_at: new Date().toISOString().split("T")[0],
    };
    setFacts((prev) => [fact, ...prev]);
    setShowForm(false);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Header */}
        <header className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center text-xl">
              💬
            </div>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Today I Learned
            </h1>
          </div>
          <button
            onClick={() => setShowForm((s) => !s)}
            className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white font-bold px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 cursor-pointer"
          >
            {showForm ? "✕ Fechar" : "✦ Compartilhar fato"}
          </button>
        </header>

        {showForm && <FactForm onAdd={handleAddFact} />}

        <div className="flex gap-6 items-start">

          {/* Sidebar */}
          <nav className="flex flex-col gap-2 min-w-40 shrink-0">
           {CATEGORIES.map((cat) => (
  <button
    key={cat.value}
    onClick={() => setActiveCategory(cat.value)}
    className="text-left px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-150 cursor-pointer text-white"
    style={{
      background: activeCategory === cat.value
        ? `linear-gradient(135deg, ${cat.color}, ${cat.colorEnd ?? cat.color})`
        : "rgba(255,255,255,0.06)",
      opacity: activeCategory === cat.value ? 1 : 0.65,
    }}
  >
    {cat.label}
  </button>
))}
</nav>

{/* Facts list */}
<div className="flex-1 flex flex-col gap-3">
  {filteredFacts.length === 0 ? (
    <p className="text-slate-500 py-8">Nenhum fato nessa categoria ainda.</p>
  ) : (
    filteredFacts.map((fact) => (
      <NewItem key={fact.id} fact={fact} onVote={handleVote} />
    ))
  )}
</div>
        </div>
      </div>
    </div>
  );
}