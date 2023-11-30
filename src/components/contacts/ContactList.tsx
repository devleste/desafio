import ContactCard from "./ContactCard";

function ContactList({ contacts }: any) {
  if (!contacts || (contacts && contacts?.length == 0)) {
    return <div className="h-full w-full">Nenhum contato encontrado!</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-3">
      {contacts.map((contact: any) => {
        return <ContactCard key={contact.id} contact={contact} />;
      })}
    </div>
  );
}
export default ContactList;
