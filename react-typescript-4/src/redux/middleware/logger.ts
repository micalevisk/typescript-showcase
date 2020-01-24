import { Middleware } from 'redux';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger: Middleware = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  console.log('state before', store.getState());
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();

  return result;
};

export default logger;
