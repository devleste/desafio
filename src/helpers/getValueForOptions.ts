import storageType from "../type/storageType";

function filterRepeatedOptions(data: (string|number)[]){
  const uniqueOptions = new Set(data);
  return [...uniqueOptions];
}

export function getOptionsValue(key: keyof storageType, data: storageType[]):(string|number)[]{
  const optionsValue = data.map((item) => item[key])
  return filterRepeatedOptions(optionsValue);
}
