export function formatDate(date) {
  let new_date = date.split('-');
  new_date = new_date[2] + '/' + new_date[1] + '/' + new_date[0];

  return new_date;
}
