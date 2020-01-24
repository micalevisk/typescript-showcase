import { combineReducers } from 'redux';
import todosReducer from './todos/reducers';
import visibilityFilterReducer from './visibilityFilter/reducers';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
