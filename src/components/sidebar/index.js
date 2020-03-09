import React from "react"
import "./style.css"

function Sidebar() {
    return (
        <aside>
            <ul>
                <li>
                    <a href="/contacts">
                        <i className="material-icons">account_circle</i>
                        <p>Todos os Contatos</p>
                    </a>
                </li>
                <li>
                    <a href="/create">
                        <i className="material-icons">add_circle</i>
                        <p>Adicionar Contato</p>
                    </a>
                </li>
                <li>
                    <a href="/statistics">
                        <i className="material-icons">assessment</i>
                        <p>Estatísticas</p>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar