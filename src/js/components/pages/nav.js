import React from "react";
import {IndexLink,Link} from "react-router";

export default React.createClass({

  getInitialState(){
    return {
      collapsed : true,
    };
  },

  toggleCollapse(){
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  },

  render(){
    const { location } = this.props;
    const {collapsed} = this.state;
    const homeClass =  location.pathname === "/" ? "active":"";
    const categoriesClass = location.pathname.match(/^\/categories/) ? "active" : "";
    const itemsClass = location.pathname.match(/^\/items/) ? "active":"";
    const navClass = collapsed ? "collapse" : "";
    return(
      <nav class="navbar navbar-inverse navbar-fixed-top" role = "navigation">
        <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" onClick={this.toggleCollapse}>
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
          <div class = {"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class = {homeClass} onClick={this.toggleCollapse}>
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li class = {categoriesClass} onClick={this.toggleCollapse}>
                <Link to="categories">Food Categories</Link>
              </li>
              <li class = {itemsClass} onClick={this.toggleCollapse}>
                <Link to="items">Food Items</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
