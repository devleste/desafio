// import { useEffect, useState } from 'react';
// import { act } from 'react-dom/test-utils';

// export default function useFetch() {
//   const [lista, setLista] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060');
//       const data = await response.json();
//       setLista(data);
//       act(() => { setLoading(false); });
//     };
//     fetchData();
//   }, []);

//   return { loading, lista };
// }