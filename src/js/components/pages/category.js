import React from "react";

export default React.createClass({

  render(){
    const {category} = this.props;
    const {name,active,type,id} = category;
    console.log(name,active);
    return(<div class="col-md-4">
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
      </div>);
  }
});
