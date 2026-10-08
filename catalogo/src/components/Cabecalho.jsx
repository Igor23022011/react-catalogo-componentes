function Cabecalho(props){
    return (
        <header className="cabecalho">
            <h1>{props.titulo}</h1>
            <h2>{props.desc}</h2>
        </header>
    )
}

export default Cabecalho