// import { useStorage } from "../store/useStorage";
import storageType from "../type/storageType";

export function HandleSave(data: storageType[]){

  localStorage.setItem("data", JSON.stringify(data));
}

export function HandleFetch(){
  const dataJson = localStorage.getItem("data");

  if(dataJson){
    return (JSON.parse(dataJson))
  }
}
