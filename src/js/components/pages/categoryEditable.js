import React from "react";
import {update} from "../../actions/categoriesActions";

export default React.createClass({

  getInitialState(){
      return this.props.category;
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
        case "active":{
          const isActive = (value == 'true');
          this.setState({active:isActive});
          break;
        }
      }
    },
    saveCategory(){
      this.props.toggleEditMode();
      this.props.dispatch(update(this.state));
    },
  render(){

    const hiddenClass = this.props.editMode? "" :"hidden";
    return(
      <div class={"col-md-4 "+hiddenClass} >
          <input value = {this.state.name} onChange ={this.handleChange.bind(this,"name")}/>
          <select value = {this.state.type} onChange ={this.handleChange.bind(this,"type")}>
            <option value ="food">Food</option>
            <option value = "drink">Dirnk</option>
          </select>
          <label>
            <input type = "radio" name = {this.state.id+"edit"} onClick ={this.handleChange.bind(this,"active")} value = {true} checked = {this.state.active}/>
            Yes
          </label>
          <label>
            <input type = "radio" name = {this.state.id+"edit"} onClick ={this.handleChange.bind(this,"active")} value = {false} checked = {!this.state.active}/>
            No
          </label>
          <button class = "btn btn-default" onClick ={this.saveCategory.bind(this)}>Save</button>
      </div>
    );
  }
});
