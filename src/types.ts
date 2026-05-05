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
}

export const CATEGORIES: Category[] = [
    { value: "all", label: "Todas", color: "#6366f1" },
    { value: "tecnologia", label: "Tecnologia", color: "#3b82f6" },
    { value: "ciencia", label: "Ciência", color: "#22c55e" },
    { value: "financas", label: "Finanças", color: "#ef4444" },
    { value: "sociedade", label: "Sociedade", color: "#eab308" },
    { value: "entretenimento", label: "Entretenimento", color: "#ec4899" },
    { value: "esporte", label: "Esporte", color: "#f97316" },
    { value: "saude", label: "Saúde", color: "#14b8a6" },
];