/**
 * Calculates the age in years based on a given birth date string.
 * 
 * @param {string} birthDate A string representing the date of birth in a format compatible with the Date object constructor (e.g., YYYY-MM-DD, YYYY/MM/DD).
 * @returns {number} The calculated age in years as a whole number (integer).
 * 
 * @author Nycolas Felipe
 */
const getAge = (birthDate) => {
  return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
}
export default getAge;