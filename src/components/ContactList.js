import React from "react";

function ContactList({
  contacts,
  onDeleteContact,
  onEditContact,
  onSaveContact,
  editingContact,
  isEditing,
}) {
  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={contact.id || index}>
            {isEditing && editingContact && editingContact.id === contact.id ? (
              // Renderizar campos de edição se isEditing for verdadeiro e o contato estiver sendo editado
              <>
                <label>
                  Primeiro Nome:
                  <input
                    type="text"
                    name="first_name"
                    value={editingContact.first_name}
                    onChange={(e) =>
                      onEditContact({
                        ...editingContact,
                        first_name: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Sobrenome:
                  <input
                    type="text"
                    name="last_name"
                    value={editingContact.last_name}
                    onChange={(e) =>
                      onEditContact({
                        ...editingContact,
                        last_name: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={editingContact.email}
                    onChange={(e) =>
                      onEditContact({
                        ...editingContact,
                        email: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Gênero:
                  <select
                    name="gender"
                    value={editingContact.gender}
                    onChange={(e) =>
                      onEditContact({
                        ...editingContact,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                  </select>
                </label>
                <label>
                  Aniversário:
                  <input
                    type="date"
                    name="birthday"
                    value={editingContact.birthday}
                    onChange={(e) =>
                      onEditContact({
                        ...editingContact,
                        birthday: e.target.value,
                      })
                    }
                  />
                </label>
              </>
            ) : (
              // Renderizar detalhes do contato se não estiver em modo de edição
              <>
                <img
                  src={contact.avatar}
                  alt={`${contact.first_name} ${contact.last_name}`}
                />
                <p>
                  Nome: {contact.first_name} {contact.last_name}
                </p>
                <p>Email: {contact.email}</p>
                <p>Gênero: {contact.gender}</p>
                <p>Idioma: {contact.language}</p>
                <p>Aniversário: {contact.birthday}</p>
              </>
            )}

            {isEditing && editingContact && editingContact.id === contact.id ? (
              // Renderizar botão "Salvar" se estiver em modo de edição
              <button onClick={() => onSaveContact(editingContact)}>
                Salvar
              </button>
            ) : (
              // Renderizar botão "Editar" se não estiver em modo de edição
              <button onClick={() => onEditContact(contact)}>Editar</button>
            )}

            <button onClick={() => onDeleteContact(contact.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
