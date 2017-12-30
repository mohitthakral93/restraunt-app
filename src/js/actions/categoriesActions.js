import axios from "axios";
import {URL} from "../util/constants";

export function getCategories(){
  return {
    type : "FETCH_CATEGORIES",
    payload : axios.get(URL()+"/food.json"),
  };
}
