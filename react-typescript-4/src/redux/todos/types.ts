export const ADD_TODO = '@todo/ADD_TODO';
export const TOGGLE_TODO = '@todo/TOGGLE_TODO';

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoState = ITodo[];

interface addTodoAction {
  type: typeof ADD_TODO;
  payload: {
    id: number;
    text: string;
  };
}

interface toggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: number;
  };
}

export type TodosActionTypes = addTodoAction | toggleTodoAction;
