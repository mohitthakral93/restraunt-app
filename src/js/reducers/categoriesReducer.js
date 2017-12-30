const initialState = {
  categories : [],
  fetching:false,
  fetched : false,
  error: null
}

const categoriesReducer = (state = initialState,action) => {
  switch(action.type){
    case "FETCH_CATEGORIES_PENDING":{
      state = {...state,fetching:true};
      break;
    }
    case "FETCH_CATEGORIES_FULFILLED":{
      const categories = {state};
      state = {...state,fetching:false,fetched:true,categories : action.payload.data};
      break;
    }
    case "FETCH_CATEGORIES_REJECTED":{
        state = {...state,fetching:false,error:action.payload};
      break;
    }
  }
  return state;
};

export default categoriesReducer;
