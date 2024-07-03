/**
 * This function validates wheter a string is a valid email address.
 * It uses a regular expression to perform the validation.
 * 
 * @param {string} string String representing the email to be validated.
 * @returns {boolean}
 * 
 * @example
 * const isValidEmail = validateEmail('userEmail@exemplo.com');
 * console.log(isValidEmail); // true
 * 
 * const isInvalidEmail = validateEmail('invalidUserEmail@example');
 * console.log(isInvalidEmail); // false
 * 
 * @author Nycolas Felipe
 */
const validateEmail = (string) => {
  const emailReg = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return emailReg.test(String(string));
};
export default validateEmail;