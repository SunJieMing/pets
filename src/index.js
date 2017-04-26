import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './App';
import SelectedPet from './SelectedPet';
import './index.css';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <Switch>
        <Route path="/pets/:name" component={SelectedPet} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
