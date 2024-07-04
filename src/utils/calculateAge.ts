export function calculateAge(birthday: string) {
  const today = new Date();
  const birthDate = new Date(birthday);

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDay() < birthDate.getDate())) {
    age--;
  }

  return age;
}
