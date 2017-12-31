import axios from "axios";
import {URL,fetchCategories} from "../util/constants";

export function getCategories(){
  return {
    type : fetchCategories(),
    payload : axios.get(URL()+"/food.json"),
  };
}
