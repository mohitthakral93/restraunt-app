import axios from "axios";
import {URL,fetchCategories,updateCategory} from "../util/constants";

export function getCategories(){
  return {
    type : fetchCategories(),
    payload : axios.get(URL()+"/food.json"),
  };
}

export function update(category){
  console.log(category);
  return {
    type : updateCategory(),
    payload : axios.put(URL()+"/food",category),
  };
}
