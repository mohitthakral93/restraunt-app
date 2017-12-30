import React from "react";
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import Layout from "../layout";
import Home from "../home";
import Categories from "../categories";
import Items from "../items";

export default React.createClass({
  render(){
    return(<Router history={hashHistory}>
          <Route path="/" component = {Layout}>
            <IndexRoute component = {Home} />
            <Route path = "categories" component={Categories}/>
            <Route path = "items" component = {Items}/>
          </Route>
      </Router>);
  }
});
