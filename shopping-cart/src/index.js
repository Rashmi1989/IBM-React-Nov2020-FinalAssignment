import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


import Products from "./Products/productsIndex";

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

import store from "./Store/storeIndex";
import Cart from "./OrderCart/views/Cart"
//important : the following line has to REMOVED when the application is deployed for production\


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <h1>Shopping Cart</h1>
        <div>
          <span>
            [ <Link to="/products">Products</Link> ]
          </span>
          <span>
            [ <Link to="/goToCart">GO TO CART</Link> ]
          </span>
        </div>
        <hr />
        <Switch>
          <Route path="/goToCart" component={Cart}/>
          <Route path="/products" component={Products}/>
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
  
);

reportWebVitals();

