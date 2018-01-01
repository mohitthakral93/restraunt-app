import React from "react";

export default React.createClass({
  editCategory(){
    this.props.toggleEditMode();
  },
  render(){
    const {category} = this.props;
    const {name,type,id,active} = category;
    const hiddenClass = this.props.editMode? "hidden" :"";
    return(<div class={"col-md-4 "+hiddenClass}>
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
        </div>
      </div>);
  }
});
