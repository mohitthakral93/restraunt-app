import React from "react";
import Category from "./pages/category";
import {URL} from "../util/constants";
export default React.createClass({
  render(){
    const categories = [{
      name : "Main Course",
      active : true,
      type : "drink",
      id : 123,
    }];
    
    const mappedCategories = categories.map((category)=><Category key = {category.id} category = {category}/>);
    return(<div>
      <h1>Categories will be loaded here....</h1>
      <div class="row">{mappedCategories}</div>
    </div>);
  }
});
