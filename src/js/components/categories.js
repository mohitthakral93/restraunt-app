import React from "react";
import Category from "./pages/category";
import NewCategory from "./pages/newCategory";
import {connect} from  "react-redux";
import {getCategories} from  "../actions/categoriesActions";

@connect((store) =>{
  return {
    categories:store.categories.categories,
    fetched : store.categories.fetched,
    error : store.categories.error,
  };
})
export default class Categories extends React.Component{

  componentWillMount(){
    const{dispatch} = this.props;
    dispatch(getCategories());
  }

  render(){
    const{categories,fetched,dispatch} = this.props;
    var mappedCategories = null;
    if(fetched){
          mappedCategories = categories.map((category)=><Category key = {category.id} category = {category} dispatch = {dispatch}/>);
    }

    return(<div>
      <h1>Categories will be loaded here....</h1>
      <NewCategory dispatch = {dispatch}/>
      <div class="row">{mappedCategories}</div>
    </div>);
  }
}
