import React from "react";
import CategoryEditable from "./categoryEditable";
import CategoryRead from "./categoryRead";

export default React.createClass({
  getInitialState(){
    return {editMode:false};
  },
  toggleEditMode(){
    const editMode = !this.state.editMode;
    this.setState({editMode});
  },
  render(){
    const {category} = this.props;
    const {name,active,type,id} = category;
    const editMode = false;
    return(<div class="col-md-4">
          <CategoryEditable category = {category} toggleEditMode = {this.toggleEditMode.bind(this)}  editMode = {this.state.editMode} dispatch = {this.props.dispatch}/>
          <CategoryRead category = {category} toggleEditMode = {this.toggleEditMode.bind(this)} editMode ={this.state.editMode} dispatch = {this.props.dispatch}/>
      </div>);
  }
});
