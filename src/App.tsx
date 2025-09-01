import './App.css'
import CardProfile from './components/CardProfile'
import type { CardProfileProps } from './components/CardProfile'

function App() {

  const devs: CardProfileProps[] = [
    {
      nome: "Edoardo Tombolesi",
      dadosPessoais: {
        idade: 21,
        lugarNascimento: "Itália"
      },
      urlImagem: "algumSite"
    },
    {
      nome: "Guilherme Moreira",
      urlImagem: "algumSite"
    },
    {
      nome: "Kevin",
      urlImagem: "algumSite"
    }
  ]

  return (
    <>
      {devs.map((dev, index) => (
        <CardProfile key={index} {...dev} />
      ))}
    </>
  )
}

export default App
