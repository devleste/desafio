import Contact from '../types/Contact';

const CalculateAge = (birthday: string) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let year = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month === 0 ) {
    const day = today.getDate() - (birthDate.getDate() +1 );
    if (day < 0) year--;
  }
  if (month < 0) year--;
  return year;
}

const TranslateBirthday = (birthday: string) => {
  const birthDate = new Date(birthday);
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate() + 1;
  const translatedBirthday = `${day}/${month}/${year}`;
  return translatedBirthday;
}

const FormatContact = (contact: Contact) => {
  const full_name = `${contact.first_name} ${contact.last_name}`
  let translated_gender = '  '
  if (contact.gender === 'M') translated_gender = 'Masculino'
  if (contact.gender === 'F') translated_gender = 'Feminino'
  const age = CalculateAge(contact.birthday);
  const translated_birthday = TranslateBirthday(contact.birthday);
  const birthDate = new Date(contact.birthday);
  const month = birthDate.getMonth() + 1 ;
  const newContact = { ...contact, full_name, translated_gender, age, translated_birthday, month }
  return newContact;
}

export default FormatContact;