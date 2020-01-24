import { StoreCreator, Reducer, StoreEnhancer } from 'redux';
import { RootState } from '../rootReducer';

const round = (number: number) => Math.round(number * 100) / 100;

const monitorReducersEnhancer = (createStore: StoreCreator) => (
  reducer: Reducer,
  preloadedState: any,
  enhancer: StoreEnhancer,
) => {
  const monitoredReducer: Reducer = (state: RootState, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start);
    console.info('reducer process time:', diff);
    return newState;
  };

  return createStore(monitoredReducer, preloadedState, enhancer);
};

export default monitorReducersEnhancer as StoreCreator;
