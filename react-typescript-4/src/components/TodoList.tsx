import * as React from 'react';
import Todo from './Todo';
import { ITodo } from '../redux/todos/types';

type Props = {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
};

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
