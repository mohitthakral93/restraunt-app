

export function URL(){
  return "http://localhost:8084/RestrauntApp-1.0-SNAPSHOT";
}

export function fetchCategories(){
  return "FETCH_CATEGORIES";
}

export function pending(){
  return "_PENDING";
}

export function fulfilled(){
  return "_FULFILLED";
}

export function rejected(){
  return "_REJECTED";
}

export function updateCategory(){
  return "UPDATE_CATEGORY";
}

export function deleteCategory(){
  return "DELETE_CATEGORY";
}

export function getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}
