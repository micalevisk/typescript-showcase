import { ADD_TODO, TOGGLE_TODO, TodosActionTypes } from './types';

let nextTodoId = 0;

export const addTodo = (text: string): TodosActionTypes => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
  },
});

export const toggleTodo = (id: number): TodosActionTypes => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});
