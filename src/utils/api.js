import filterData from './utils';

export default function setLocalStorage(contact) {
  let ls = JSON.parse(localStorage.getItem('data') || '[]');
  ls = filterData(ls, contact);

  localStorage.setItem('data', JSON.stringify(ls));

  localStorage.removeItem('form');
}

