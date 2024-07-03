import data from "../mocks/data.json";

export default async function getContacts() {
  const url = "https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060";
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.debug('Error while fetching:', error);
    console.debug("Carregando arquivos salvos localmente.");
    return data.contacts;
  }
}
