import type { Fact } from "./types";
import { CATEGORIES } from "./types";

interface Props {
  fact: Fact;
  onVote: (id: number, type: "interesting" | "mindblowing" | "false") => void;
}

export default function NewItem({ fact, onVote }: Props) {
  const isFalse = fact.votes_false > fact.votes_interesting + fact.votes_mindblowing;
  const categoryColor =
    CATEGORIES.find((c) => c.value === fact.category.toLowerCase())?.color ?? "#6b7280";

  const voteButtons = [
    { type: "interesting" as const, emoji: "👍", count: fact.votes_interesting },
    { type: "mindblowing" as const, emoji: "🤯", count: fact.votes_mindblowing },
    { type: "false" as const,       emoji: "⛔", count: fact.votes_false },
  ];

  return (
    <div
      className="rounded-xl border border-white/10 p-4 flex flex-col gap-3 transition-opacity duration-200"
      style={{
        background: "rgba(255,255,255,0.04)",
        opacity: isFalse ? 0.45 : 1,
      }}
    >
      <p
        className="text-sm leading-relaxed"
        style={{
          color: isFalse ? "#64748b" : "#e2e8f0",
          textDecoration: isFalse ? "line-through" : "none",
        }}
      >
        {fact.text}{" "}
        <a
          href={fact.source}
          target="_blank"
          rel="noreferrer"
          className="text-rose-400 text-xs font-medium hover:underline"
        >
          (Fonte)
        </a>
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        <span
          className="text-white text-[0.68rem] font-black uppercase tracking-widest px-3 py-0.5 rounded-full"
          style={{ background: categoryColor }}
        >
          {fact.category}
        </span>

        <div className="ml-auto flex gap-2">
          {voteButtons.map(({ type, emoji, count }) => (
            <button
              key={type}
              onClick={() => onVote(fact.id, type)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-150 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              {emoji} {count}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}