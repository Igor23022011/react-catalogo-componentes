function CardCurso(props){
    const temVagas = props.vagas > 0

    return (
        <div className="card">
            <h3 className="card-titulo">{props.curso}</h3>

            <ul className="card-info">
                <li><span>Duração</span> <strong>{props.duracao}</strong></li>
                <li><span>Modalidade</span> <strong>{props.modalidade}</strong></li>
                <li><span>Nível</span> <strong>{props.nivel}</strong></li>
            </ul>

            <p className={temVagas ? "vagas vagas-ok" : "vagas vagas-cheia"}>
                {temVagas ? "Vagas Disponíveis!! ^^" : "Turma Completa!"}
            </p>
        </div>
    )
}

export default CardCurso