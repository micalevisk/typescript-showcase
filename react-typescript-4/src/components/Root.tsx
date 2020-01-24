import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import { VisibilityFilters } from '../redux/visibilityFilter/types';
import { Store } from 'redux';

type Props = {
  store: Store;
};

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter" component={App} />
      <Redirect to={'/' + VisibilityFilters.SHOW_ALL} />
    </Router>
  </Provider>
);

export default Root;

