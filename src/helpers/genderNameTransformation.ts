
export function genderNameTransformation(gender: string | undefined){

  if(!gender){
    return "Genero não identificado"
  }

  if(gender === "M"){
    return "Masculino";
  }

  return "Feminino";
}
