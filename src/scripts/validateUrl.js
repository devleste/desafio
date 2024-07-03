/**
 * Validates a given URL string according to a common regular expression pattern.
 *
 * @param {string} urlString - The URL string to be validated.
 * @returns {boolean} True if the URL string appears to be valid, false otherwise.
 *
 * @example
 * const validUrl = 'https://www.example.com/path/to/file';
 * const invalidUrl = 'invalid_url';
 *
 * console.log(validateUrl(validUrl));   // Output: true
 * console.log(validateUrl(invalidUrl)); // Output: false
 */
const validateUrl = (urlString) => {
  var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
  return !!urlPattern.test(urlString);
}
export default validateUrl;