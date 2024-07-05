export function isObjectEmpty(obj) {
  return Object.values(obj).every(
    (value) =>
      value === '' || value === false || value === null || value === undefined
  );
}
