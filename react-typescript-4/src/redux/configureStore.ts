import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './rootReducer';

const __PROD__ = process.env.NODE_ENV === 'production';

function configureAppStore(preloadedState?: object) {
  const middlewares = [loggerMiddleware, ...getDefaultMiddleware()];
  const enhancers = [monitorReducersEnhancer];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    preloadedState,
    enhancers,
  });

  if (!__PROD__ && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}

export default configureAppStore;
