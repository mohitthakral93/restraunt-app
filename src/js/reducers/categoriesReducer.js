import * as Constants from "../util/constants";
const initialState = {
  categories : [],
  fetching:false,
  fetched : false,
  error: null
}

const categoriesReducer = (state = initialState,action) => {
  console.log(Constants.fetchCategories());
  switch(action.type){
    case Constants.fetchCategories()+Constants.pending():{
      state = {...state,fetching:true};
      break;
    }
    case  Constants.fetchCategories()+Constants.fulfilled():{
      const categories = {state};
      state = {...state,fetching:false,fetched:true,categories : action.payload.data};
      break;
    }
    case Constants.fetchCategories()+Constants.rejected():{
        state = {...state,fetching:false,error:action.payload};
      break;
    }
  }
  return state;
};

export default categoriesReducer;
