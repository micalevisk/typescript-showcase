import {
  connect,
  MapStateToPropsParam,
} from 'react-redux';
import TodoList, { Props } from '../components/TodoList';
import { toggleTodo } from '../redux/todos/actions';
import { ITodo } from '../redux/todos/types';
import { RootState } from '../redux/rootReducer';

import { VisibilityFilters } from '../redux/visibilityFilter/types';

export const getVisibleTodos = (todos: ITodo[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_ALL:
      return todos;
    default:
      return todos;
  }
};

type StateProps = Omit<Props, 'toggleTodo'>;
type DispatchProps = Omit<Props, 'todos'>;
type OwnProps = {
  filter: string;
};

type StateToProps = MapStateToPropsParam<StateProps, OwnProps, RootState>;
const mapStateToProps: StateToProps = (
  state: RootState,
  ownProps: OwnProps,
) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter),
});

const mapDispatchToProps = { toggleTodo };
/*
const mapDispatchToProps: DispatchPropsFunc = dispatch =>
  bindActionCreators({ toggleTodo }, dispatch);
*/
/*
const mapDispatchToProps: DispatchPropsFunc = dispatch => ({
  toggleTodo: (id: number) => {
    dispatch(toggleTodo(id));
  },
});
*/

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
