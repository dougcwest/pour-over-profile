import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import Timer from './components/timer';
import CoffeeIndex from './components/coffee-index';
import CoffeeQuiz from './components/coffe-quiz';
import RecipeDetails from './components/recipe-details';
import Header from './components/header';
import reducers from './reducers';
import NavBar from './components/nav-bar';

// require('dotenv').config();

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Header>
        <NavBar />
        <Switch>
          <Route path="recipes/new" component={CoffeeQuiz} />
          <Route exact path="/" component={CoffeeIndex} />
          <Route path="/coffee-quiz" component={CoffeeQuiz} />
          <Route path="/brew-timer" component={Timer} />
          <Route path="/recipe/:id" component={RecipeDetails} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
