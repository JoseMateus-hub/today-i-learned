import type { Fact } from "./types";
import NewItem from "./NewItem";

export default function App() {
  const facts: Fact[] = [{
    id: 1,
    text: "A Digital College tem o melhor curso de programação do Brasil",
    source: "https://www.digitalcollege.com.br/",
    category: "tecnologia",
    votes_interesting: 15,
    votes_mindblowing: 1,
    votes_false: 0,
    created_at: "2026-05-05"
  }, {
     id: 2,
     text: "Neymar é acusado de tentativa de homicídio estimulada por racismo contra pessoa negra",
     source: "https://g1.com",
     category: "esporte",
     votes_interesting: 0,
     votes_mindblowing: 0,
     votes_false: 1,
     created_at: "2026-05-04"
  }, {
      id: 3,
      text: "Virginia foi para a balada com o Zé Felipe e houve troca de afetos.",
      source: "https://leodias.com",
      category: "Entretenimento",
      votes_interesting: 2,
      votes_mindblowing: 3,
      votes_false: 5,
      created_at: "2026-04-01"

  }];
  
  return(
    <>
    {facts.map(
      fact => <NewItem 
      fact={fact.text} source={fact.source} category={fact.category} votes_interesting={fact.votes_interesting} 
      votes_mindblowing={fact.votes_mindblowing} votes_false={fact.votes_false} key={fact.id} />
    )}
    </>
  )
}