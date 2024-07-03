/**
 * This function splits a list of data into an array of pages.
 * Each page will contain a set number of items.
 * 
 * @param {array} data Array containing data to be paginated.
 * @param {number} dataPerPage Integer defining max elements per page. Default is 8.
 * @returns {array}
 * 
 * @example
 * // Sample data
 * const users = [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Charlie", age: 28 },
 *   { name: "David", age: 35 },
 *   { name: "Eve", age: 22 },
 *   { name: "Frank", age: 40 }
 * ];
 * 
 * // Pagination with 2 items per page
 * const paginatedUsers = paginate(users, 2);
 * console.log(paginatedUsers);
 * 
 * // Output:
 * [
 *  [
 *    { name: "Alice", age: 25 },
 *    { name: "Bob", age: 30 }
 *  ],
 *  [
 *    { name: "Charlie", age: 28 },
 *    { name: "David", age: 35 }
 *  ],
 *  [
 *    { name: "Eve", age: 22 },
 *    { name: "Frank", age: 40 }
 *  ]
 * ];
 * 
 * @author Nycolas Felipe
 */
const paginate = (data, dataPerPage = 8) => {
  if (Array.isArray(data)) {
    if (Number.isInteger(dataPerPage)) {
      const totalDataCount = data.length;
      const pageCount = Math.ceil(totalDataCount / dataPerPage);
      const paginatedData = Array.from({ length: pageCount }, (_, index) => {
        const start = index * dataPerPage;
        return data.slice(start, start + dataPerPage);
      });
      return paginatedData;
    } else {
      console.debug("Provided parameter 'data' is not a integer.");
      return [];
    }
  } else {
    console.debug("Provided parameter 'data' is not a array.");
    return [];
  }
}
export default paginate;