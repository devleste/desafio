import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './my-contact.css';
import EditContact from '../EditContact';

export default function MyContacts(){

    const [contacts, setContacts] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {

        const storedContacts = localStorage.getItem('contacts');

        if (storedContacts) {
            setContacts(JSON.parse(storedContacts));
        }

    }, []);

    function formatedText(word){

        return word.charAt(0).toUpperCase() + word.slice(1);

    }

    function handleDelete(index) {

        const updatedContacts = [...contacts];
        updatedContacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        setContacts(updatedContacts);

    }

    function handleEdit(index){

        setEditingIndex(index);

    }

    function handleSaveEdit(updatedContact) {

        const updatedContacts = [...contacts];
        updatedContacts[editingIndex] = updatedContact;
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        setContacts(updatedContacts);
        setEditingIndex(null);

    }

    function handleCancelEdit() {
        setEditingIndex(null);
    }

    return (
        
        <div className='meus-contatos'>
            
            <div className='container-title'>
                <h1>Meus contatos</h1>
                <Link to ='/novo-contato' className ='btn-addContact'>Adicionar contato</Link>
            </div>

            {contacts.length === 0 && <h3>Você ainda não tem nenhum contato salvo! </h3>}
            
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <h2>{formatedText(contact.firstName)} {formatedText(contact.lastName)}</h2>
                        <br />
                        <p>Language: {formatedText(contact.language)}</p>
                        <br/>
                        <p>Age: {contact.age}</p>
                        <br/>
                        <p>Genre: {formatedText(contact.genre)}</p>
                        <br/>
                        <p>Email: {contact.email}</p>
                        <br/>
                        <div className='container-button'>
                            <button className='edit-button' onClick={() => handleEdit(index)}>Editar</button>
                            <button className='delete-button' onClick={() => handleDelete(index)}>Apagar</button>
                        </div>
                        
                        {editingIndex === index && (

                            <EditContact
                                contact={contact}
                                onSave={handleSaveEdit}
                                onCancel={handleCancelEdit}
                            />

                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}