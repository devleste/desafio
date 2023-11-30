import { apiURL } from "./common";

async function fetchAll() {
  const data = await fetch(apiURL);
  if (data.status > 200) {
    throw Error(`Erro ${data.status} ao buscar contatos`);
  }
  return data.json();
}

export const contactsAPI = { fetchAll };
