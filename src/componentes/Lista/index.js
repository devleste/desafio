import './Lista.css'

function Lista(props){
    function descadastrar(id) {
        return () => props.descadastrar(id)
    }

    function editar(cadastro) {
        return () => props.editar(cadastro)
    }

    return(
        <div className="lista">
            <div className='listaCard'>
                {props.lista.map(person =>
                    <div className='listaCardCard' key={person.id}>
                        {person.first_name}
                        { (props.descadastrar || props.editar ) && <div className='listaBt'>
                            <div>
                                {props.descadastrar && <button className='listaBtE' onClick={editar(person)}>Editar</button>}
                            </div>
                            <div>
                                {props.editar && <button className='listaBtR' onClick={descadastrar(person.id)}>Remover</button>}
                            </div>
                        </div> }
                    </div>
                )}
            </div>
        </div>
    )
}

export default Lista