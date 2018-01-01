import React from "react";
import {deleteCat} from "../../actions/categoriesActions";

export default React.createClass({
  editCategory(){
    this.props.toggleEditMode();
  },
  deleteCategory(id){
    this.props.dispatch(deleteCat(id));
  },
  render(){
    const {category} = this.props;
    const {name,type,id,active} = category;
    const hiddenClass = this.props.editMode? "hidden" :"";
    return(<div class={"col-lg-4 "+hiddenClass}>
        <h4>{name}</h4>
        <select value = {type}>
          <option value ="food">Food</option>
          <option value = "drink">Dirnk</option>
        </select>
        <label>
          <input type = "radio" name = {id} value = {true} checked = {active}/>
          Yes
        </label>
        <label>
          <input type = "radio" name = {id} value = {false} checked = {!active}/>
          No
        </label>
        <div>
        <button type="button" class="btn btn-default btn-lg" onClick={this.editCategory.bind(this)}  aria-label="Left Align">
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-default btn-lg" onClick={this.deleteCategory.bind(this,id)}  aria-label="Left Align">
              <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
        </button>
        </div>
      </div>);
  }
});
