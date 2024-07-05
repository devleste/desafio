export function getBirthdateFromAge(age: number) {
  const today = new Date()
  const birthYear = today.getFullYear() - age

  // Assume the birthdate is today's date but in the birthYear
  const birthDate = new Date(birthYear, today.getMonth(), today.getDate())

  return birthDate.toISOString().split("T")[0] // Format the date as YYYY-MM-DD
}
