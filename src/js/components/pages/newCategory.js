import React from "react";
import {add} from "../../actions/categoriesActions";

export default React.createClass({
  getInitialState(){
    return {
      name:null,
      type:null,
    };
  },
  handleChange(name,e){
    const value = e.target.value;
    switch (name) {
      case "name":{
        this.setState({name:value});
        break;
      }
      case "type":{
        this.setState({type:value});
        break;
      }
    }
  },
  saveCategory(){
    this.props.dispatch(add(this.state));
  },
  render(){
    return (
      <div class={"col-md-4"} >
          <input value = {this.state.name} onChange ={this.handleChange.bind(this,"name")}/>
          <select value = {this.state.type} onChange ={this.handleChange.bind(this,"type")}>
            <option value="" disabled selected>Select your option</option>
            <option value ="food">Food</option>
            <option value = "drink">Dirnk</option>
          </select>
          <button class = "btn btn-success" onClick ={this.saveCategory.bind(this)}>Save</button>

      </div>
    );
  }
});
