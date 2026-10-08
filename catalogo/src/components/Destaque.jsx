function Destaque(props){
    return (
        <div className="card destaque">
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    )
}

export default Destaque