import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

type Params = {
  filter: string;
};
type Props = RouteComponentProps<Params>;

const App = ({ match: { params } }: Props) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter} />
    <Footer />
  </div>
);

export default App;
