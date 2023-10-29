const API_URL = "https://my.api.mockaroo.com/lestetelecom/test.json";
const API_KEY = "f55c4060";

export const fetchContacts = async () => {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error; // Re-throw the error after logging it
  }
};

// Função para carregar os contatos do localStorage
export const loadContacts = () => {
  const contactsJSON = localStorage.getItem("contacts");
  return contactsJSON ? JSON.parse(contactsJSON) : null;
};
