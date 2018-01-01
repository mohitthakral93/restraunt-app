import axios from "axios";
import {URL,fetchCategories,updateCategory,deleteCategory} from "../util/constants";

export function getCategories(){
  return {
    type : fetchCategories(),
    payload : axios.get(URL()+"/food.json"),
  };
}

export function update(category){
  return {
    type : updateCategory(),
    payload : axios.put(URL()+"/food",category),
  };
}

export function deleteCat(id){
  console.log(id);
  return {
    type:deleteCategory(),
    payload:axios.delete(URL()+"/food/"+id),
  };
}
