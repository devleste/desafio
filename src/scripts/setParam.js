/**
 * This function updates a query parameter (or creates a new one) in the current URL of the
 * web page. It utilizes the `window.history.pushState` API if available, allowing the URL
 * to be updated without causing a full page reload.
 * 
 * @param {string} key The name of the query parameter to be updated or created.
 * @param {string} value The new value to be assigned to the query parameter.
 * @returns {void}
 * 
 * @example
 * setParam('filter', 'active');  // Updates or creates the 'filter' parameter with value 'active'
 * 
 * @author NycolasFelipe
 */
const setParam = (key, value) => {
  if (window.history.pushState) {
    var params = new URLSearchParams(window.location.search);
    params.set(key, value);
    var newUrl = window.location.origin
      + window.location.pathname
      + '?' + params.toString();
    window.history.pushState({ path: newUrl }, '', newUrl);
  }
}
export default setParam;