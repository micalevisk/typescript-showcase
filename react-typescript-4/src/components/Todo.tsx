import * as React from 'react';

type Props = {
  onClick: React.MouseEventHandler;
  completed: boolean;
  text: string;
};

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer',
    }}
  >
    {text}
  </li>
);

export default Todo;
