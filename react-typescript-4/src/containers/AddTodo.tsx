import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/todos/actions';

type DispatchProps = {
  addTodo: typeof addTodo;
};
type Props = DispatchProps;

const AddTodo = ({ addTodo }: Props) => {
  const inputEl = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputEl.current!.select();
  }, []); // run once == componentDidMount

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!inputEl.current!.value.trim()) {
            return;
          }
          addTodo(inputEl.current!.value);
          inputEl.current!.value = '';
        }}
      >
        <input ref={inputEl} type="text" />
        <button type="submit" style={{ cursor: 'pointer' }}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

const AddTodoContainer = connect<{}, DispatchProps>(
  null, // do not subscribe to the store
  {
    // inject action creators
    addTodo,
  },
)(AddTodo);

export default AddTodoContainer;

