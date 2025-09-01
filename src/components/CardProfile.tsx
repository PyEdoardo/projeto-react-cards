interface CardProfileProps {
    nome: string
    dadosPessoais?: DadosPessoais
    urlImagem: string
}

interface DadosPessoais {
    idade: number
    lugarNascimento: string
}

const CardProfile = ({ nome, dadosPessoais, urlImagem }: CardProfileProps): React.JSX.Element => {

    const idade = dadosPessoais?.idade;
    const lugarNascimento = dadosPessoais?.lugarNascimento;

    return (
        <div className="card">
            <img src={urlImagem} alt={`Foto de ${nome}`} />
            <h2>{nome}</h2>
            {idade !== undefined && <p>{idade} anos</p>}
            {lugarNascimento !== undefined && <p>{lugarNascimento}</p>}
        </div>
    );
}

export default CardProfile;
export type { CardProfileProps, DadosPessoais };