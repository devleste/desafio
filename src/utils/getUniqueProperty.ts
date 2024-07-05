export function getUniquePropertyValues<T, K extends keyof T>(
  arr: T[],
  prop: K
): T[K][] {
  // Mapeia para obter os valores da propriedade
  const values = arr.map((item) => item[prop])

  // Usa o Set para obter valores únicos
  const uniqueValues = Array.from(new Set(values))

  return uniqueValues
}
