import './App.css'
import Cabecalho from './components/Cabecalho'
import CardCurso from './components/CardCurso'
import Destaque from './components/Destaque'


const cursos = [{
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12
  },

  {
    nome: "Desenvolvimento Mobile",
    duracao: "800 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 0
  },

  {
    nome: "Redes de Computadores",
    duracao: "120 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 5
  },

  {
    nome: "Manutenção de Computadores",
    duracao: "160 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 2
  },

  {
    nome: "Programação Web",
    duracao: "180 horas",
    modalidade: "EAD",
    nivel: "Técnico",
    vagas: 0
  },

  {
    nome: "Banco de Dados",
    duracao: "120 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 3
  }
];

function App() {
  return (
    <>
      <div>
           <Cabecalho titulo="Aprenda..." desc="Sobre..." />
      </div>

      <div>
        {cursos.map((c) => (
          <CardCurso
          key={c.nome}
          curso={c.nome}
          duracao={c.duracao}
          modalidade={c.modalidade}
          nivel={c.nivel}
          vagas={c.vagas}
          />
        ))}
      </div>

      <div>
        <Destaque titulo = "teste" texto = "teste2"/>
      </div>
    </>
  )
}




export default App
