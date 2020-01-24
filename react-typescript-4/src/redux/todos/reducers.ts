import { ADD_TODO, TOGGLE_TODO, ITodo, TodosActionTypes } from './types';

const INITIAL_STATE: ITodo[] = [];

const todos = (state = INITIAL_STATE, action: TodosActionTypes): ITodo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    default:
      return state;
  }
};

export default todos;