export const generateColors = (n: number) => {
  const colors = []
  const saturation = 70 // You can adjust this value (0-100)
  const lightness = 50 // You can adjust this value (0-100)

  for (let i = 0; i < n; i++) {
    const hue = ((i * 360) / n) % 360
    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
  }

  return colors
}
