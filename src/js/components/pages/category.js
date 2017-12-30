import React from "react";

export default React.createClass({

  render(){
    const {category} = this.props;
    const {name,active,type} = category;
    console.log(active);
    return(<div class="col-md-4">
        <h4>{name}</h4>
        <select value = {type}>
          <option value ="food">Food</option>
          <option value = "drink">Dirnk</option>
        </select>
        <input type = "radio" name = "active" value = {true} checked = {active}>Yes</input>
        <input type = "radio" name = "active" value = {false} checked = {!active}>No</input>
      </div>);
  }
});
