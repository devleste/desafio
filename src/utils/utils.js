export default function filterData(array, object) {
  let newData = array;
  newData = newData.filter(({ id }) => id !== object.id);
  newData.push(object);
  return newData;
}