export async function getData() {
  // Verifica se existe data no LocalStorage
  const localStorageData = localStorage.getItem('contactsData');
  if (localStorageData) {
    return JSON.parse(localStorageData);
  }

  try {
    const response = await fetch(
      'https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060',
    );

    if (!response.ok) {
      throw new Error('API request limit exceeded or other error');
    }

    const data = await response.json();
    // Guarda os dados online no LocalStorage
    localStorage.setItem('contactsData', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(
      'Erro ao recuperar os dados do servidor! Buscando dados locais...',
      error,
    );

    try {
      // Faz um fetch nos dados locais, caso a API tenha ultrapassado o limite diário de requisições.
      const localResponse = await fetch('/test.json');

      if (!localResponse.ok) {
        throw new Error('Local data fetch failed');
      }

      const localData = await localResponse.json();
      // Guarda os dados locais no LocalStorage
      localStorage.setItem('contactsData', JSON.stringify(localData));
      return localData;
    } catch (localError) {
      console.error('Erro ao recuperar os dados locais!', localError);
      throw localError;
    }
  }
}
