import storageType from "../type/storageType";

function thereIsValidation(currentFilterDate: string, currentGender: string, currentLanguage: string, seachInpuValue: string){
  return currentGender === "" && currentLanguage === "" && currentFilterDate === "" && seachInpuValue == ""
}

function getAge(birthdate: string): string {
  const now: Date = new Date();
  const birthdateDate: Date = new Date(birthdate);

  // Calculate the difference in years between the current date and the birthdate.
  let years: number = (now.getFullYear() - birthdateDate.getFullYear());
  // Calculate the difference in months between the current date and the birthdate.
  const months = (now.getMonth() - birthdateDate.getMonth());
  // Adjust the years if the current month is before the birthdate month.
  if (months < 0) {
    years--;
  }

  return `${years}`;
}

function parseToLowerCase(value: string){
  return value.toLowerCase();
}

export function filterTableByInput(dataValues: storageType[], seachInpuValue: string){
  if(seachInpuValue === ""){
    return dataValues;
  }

  return dataValues.filter((item:storageType) => parseToLowerCase(item.first_name).includes(parseToLowerCase(seachInpuValue)));
}

function getArrayFilteredByAge(data: storageType[], comparisonValue: string):storageType[]{
  if(comparisonValue === ""){
    return data;
  }

  return data.filter((item) => eval(comparisonValue.replaceAll("Age", getAge(item.birthday))));
}

function getFilteredArray(key: keyof storageType, comparisonValue: string, data: storageType[]): storageType[]{
  if(comparisonValue === ""){
    return data;
  }

  if(key === "birthday"){
    return getArrayFilteredByAge(data, comparisonValue);
  }

  return data.filter((item) => item[key] === comparisonValue);
}

function filtering(data: storageType[], currentFilterDate: string, currentGender: string, currentLanguage: string, seachInpuValue: string){
  
  if(thereIsValidation(currentFilterDate, currentGender, currentLanguage, seachInpuValue)){
    return data;
  }
  
  let filter = getFilteredArray("language", currentLanguage, data);
  filter = getFilteredArray("gender", currentGender, filter);
  filter = getFilteredArray("birthday", currentFilterDate, filter);
  filter = filterTableByInput(filter, seachInpuValue);
  
  return filter;  
}

export default filtering;
