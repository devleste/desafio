export function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export function getRandomColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 99 * Math.random()) +
    "%," +
    (50 + 10 * Math.random()) +
    "%)"
  );
}
