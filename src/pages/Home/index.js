import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css'

import api from '../../services/api';

function Home() {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {

        async function loadList() {

            const response = await api.get("/test.json?key=f55c4060");

            setList(response.data.slice(0, 6));
            setLoading(false);
        }

        loadList();

    }, [])

    function searchMovies() {
        const searchResults = list.filter((person) =>
            person.first_name.toLowerCase().includes(search.toLowerCase())
        );
    
        setList(searchResults);
    }

    if (loading) {
        return (
            <div className="loading">
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <div>
            <div className='input-container'>
                <div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Procurando por alguém?'
                    />
                    <button onClick={searchMovies}>Procurar</button>
                </div>
                
                <Link to='/meus-contatos' className="contacts-btn">Meus contatos</Link>
            </div>

            <div className="container-list">
                {list.map((item) => (
                    <article key={item.id}>

                        <img src={item.avatar} alt={`Imagem de perfil de ${item.first_name}`} className="profile-img"/>

                        <h1>{item.first_name} {item.last_name}</h1>
                        <p><strong>Email:</strong> {item.email}</p>

                        <div className="personal-info">

                            <p><strong>Birthday:</strong> {item.birthday}</p>
                            <p><strong>Gênero:</strong> {item.gender === 'M' ? 'Masculino' : 'Feminino'}</p>

                        </div>

                        <div className="language">
                            <p><strong>Language:</strong> {item.language}</p>
                        </div>

                    </article>
                ))}
            </div>
        </div>
    )
}

export default Home;
