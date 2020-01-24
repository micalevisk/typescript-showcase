import * as React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './redux/configureStore';

const __PROD__ = process.env.NODE_ENV === 'production';

const rootElement = document.getElementById('root');

const store = configureStore();
const renderApp = () => render(<Root store={store} />, rootElement);

if (!__PROD__ && module.hot) {
  module.hot.accept('./components/App', renderApp);
}

renderApp();
