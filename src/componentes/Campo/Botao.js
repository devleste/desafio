function Botao(props){
    return(
        <div>
            <button onClick={props.event} className="campoBt">{props.bt}</button>
        </div>
    )
}
export default Botao