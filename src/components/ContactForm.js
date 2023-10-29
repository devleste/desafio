import React from "react";
import { v4 as uuidv4 } from "uuid"; // Importe a função uuidv4 para gerar IDs únicos

function ContactForm({ newContact, onAddContact, onChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione o novo contato no início da lista e defina um ID único
    const id = uuidv4();
    const contactWithId = { ...newContact, id };
    onAddContact(contactWithId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Primeiro Nome:
        <input
          type="text"
          name="first_name"
          value={newContact.first_name}
          onChange={onChange}
        />
      </label>
      <label>
        Sobrenome:
        <input
          type="text"
          name="last_name"
          value={newContact.last_name}
          onChange={onChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={newContact.email}
          onChange={onChange}
        />
      </label>
      <label>
        Gênero:
        <select name="gender" value={newContact.gender} onChange={onChange}>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
      </label>
      <label>
        Aniversário:
        <input
          type="date"
          name="birthday"
          value={newContact.birthday}
          onChange={onChange}
        />
      </label>
      {/* Outros campos do formulário */}
      <button type="submit">Adicionar Contato</button>
    </form>
  );
}

export default ContactForm;
