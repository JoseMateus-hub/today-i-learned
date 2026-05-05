export interface Fact {
  id: number;
  text: string;
  source: string;
  category: string;
  votes_interesting: number;
  votes_mindblowing: number;
  votes_false: number;
  created_at: string;
}

export interface Category {
  value: string;
  label: string;
  color: string;
  colorEnd?: string;
}

export const CATEGORIES: Category[] = [
  { value: "all",            label: "Todas",          color: "#ec4899", colorEnd: "#22c55e" },
  { value: "tecnologia",     label: "Tecnologia",     color: "#3b82f6", colorEnd: "#6366f1" },
  { value: "ciencia",        label: "Ciência",        color: "#22c55e", colorEnd: "#14b8a6" },
  { value: "financas",       label: "Finanças",       color: "#ef4444", colorEnd: "#f97316" },
  { value: "sociedade",      label: "Sociedade",      color: "#eab308", colorEnd: "#f97316" },
  { value: "entretenimento", label: "Entretenimento", color: "#ec4899", colorEnd: "#a855f7" },
  { value: "esporte",        label: "Esporte",        color: "#f97316", colorEnd: "#ef4444" },
  { value: "saude",          label: "Saúde",          color: "#14b8a6", colorEnd: "#22c55e" },
];