// ContactSum.js
import React from "react";

function ContactSum({ contacts }) {
  const countByGender = (gender) => {
    return contacts.filter((contact) => contact.gender === gender).length;
  };

  return (
    <div>
      <p>Total de Contatos: {contacts.length}</p>
      <p>Contatos Masculinos: {countByGender("M")}</p>
      <p>Contatos Femininos: {countByGender("F")}</p>
      {/* Adicione outras estatísticas de idioma conforme necessário */}
    </div>
  );
}

export default ContactSum;
