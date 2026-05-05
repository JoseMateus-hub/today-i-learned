export default function NewItem(
    { fact, source, category, votes_interesting, votes_mindblowing, votes_false }: 
    { fact: string; source: string; category: string; votes_interesting: number; votes_mindblowing: number; votes_false: number }
) {
    return (
        <>
        <div>
            <h1>{fact}</h1>
            <a href={source}>Fonte</a>
        </div>
        <div>
            <p>Categoria: {category}</p>
            <p>Votos interessantes: {votes_interesting}</p>
            <p>Votos surpreendentes: {votes_mindblowing}</p>
            <p>Votos falsos: {votes_false}</p>
        </div>
        </>

    )
}