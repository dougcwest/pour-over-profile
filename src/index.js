import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import CoffeeIndex from "./components/coffee-index";
import CoffeeQuiz from "./components/coffe-quiz";
import RecipeDetails from "./components/recipe-details"
import Header from "./components/header";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path="/coffee-quiz" component={CoffeeQuiz} />
          <Route path='/recipe' component={RecipeDetails} />
          <Route path='/' component={CoffeeIndex} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
