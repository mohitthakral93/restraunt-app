import ReactDOM from "react-dom";
import React from "react";
import Layout from "./components/layout";
import Routes from "./components/routes/mainNavigation"
import store from "./store";
import {Provider} from "react-redux";

const app = document.getElementById('app');

ReactDOM.render(<Provider store = {store}>
  <Routes/>
  </Provider>,app);
