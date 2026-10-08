import './App.css'
import Cabecalho from './components/Cabecalho'
import CardCurso from './components/CardCurso'
import Destaque from './components/Destaque'

const cursos = [
  {
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

const destaques = [
  {
    titulo: "Aulas práticas",
    texto: "Você aprende programando, montando e configurando desde o primeiro módulo."
  },
  {
    titulo: "Projetos reais",
    texto: "Cada curso termina com um projeto que vai direto para o seu portfólio."
  },
  {
    titulo: "Certificado técnico",
    texto: "Documento reconhecido para quem quer entrar no mercado de tecnologia."
  },
  {
    titulo: "Turmas reduzidas",
    texto: "Poucos alunos por turma, para você ter a atenção do professor em cada aula."
  }
];

function App() {
  return (
    <div className="pagina">
      <Cabecalho
        titulo="Seu futuro na tecnologia começa aqui"
        desc="Cursos técnicos de TI para você sair da teoria e colocar a mão na massa."
      />

      <h2 className="secao-titulo">Por que estudar com a gente</h2>
      <div className="lista-destaques">
        {destaques.map((d) => (
          <Destaque key={d.titulo} titulo={d.titulo} texto={d.texto} />
        ))}
      </div>

      <h2 className="secao-titulo">Cursos disponíveis</h2>
      <div className="lista-cursos">
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
    </div>
  )
}

export default App