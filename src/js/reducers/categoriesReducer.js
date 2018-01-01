import * as Constants from "../util/constants";
import update from "react-addons-update";

const initialState = {
  categories : [],
  fetching:false,
  fetched : false,
  error: null
}

const categoriesReducer = (state = initialState,action) => {
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
    case Constants.updateCategory()+Constants.rejected():{
        state = {...state,fetching:false,error:action.payload};
      break;
    }
    case Constants.updateCategory()+Constants.fulfilled():{
      const {categories} = state;
      const index = Constants.getIndex(action.payload.data.id,categories,"id");
      state = update(state,{
        categories:{
          [index] :{$set:action.payload.data}
        }});
        break;
    }
    case Constants.deleteCategory()+Constants.fulfilled():{
      const {categories} = state;
      const index = Constants.getIndex(action.payload.data.id,categories,"id");
      state = {...state,categories:update(categories,{$splice:[[index,1]]})};
      break;
    }
    case Constants.deleteCategory()+Constants.rejected():{
      state = {...state,fetching:false,error:action.payload};
      break;
    }
    case Constants.addCategory()+Constants.rejected():{
      state = {...state,fetching:false,error:action.payload};
      break;
    }
    case Constants.addCategory()+Constants.fulfilled():{
      const {categories} = state;
      state = {...state,categories:update(categories,{$push:[action.payload.data]})};
      break;
    }
  }

  return state;
};

export default categoriesReducer;
