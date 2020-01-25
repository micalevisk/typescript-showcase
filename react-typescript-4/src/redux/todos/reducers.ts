import { ADD_TODO, TOGGLE_TODO, TodosActionTypes, TodoState } from './types';

const INITIAL_STATE: Readonly<TodoState> = [];

const todos = (
  slice = INITIAL_STATE,
  action: TodosActionTypes
): typeof INITIAL_STATE => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...slice,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return slice.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return slice;
  }
};

export default todos;
