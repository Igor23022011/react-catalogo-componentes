function CardCurso(props){
    return <>
    <p>{props.curso}</p>
    <p>{props.duracao}</p>
    <p>{props.modalidade}</p>
    <p>{props.nivel}</p>
    <p>{props.vagas > 0 ? "Vagas Disponíveis!! ^^" : "Turma Completa!"}</p>
    </>
}

export default CardCurso