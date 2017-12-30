import ReactDOM from "react-dom";
import React from "react";
import Layout from "./components/layout";
import Routes from "./components/routes/mainNavigation"

const app = document.getElementById('app');

ReactDOM.render(<Routes/>,app);
