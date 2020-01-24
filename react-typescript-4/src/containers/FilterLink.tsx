import * as React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  filter: string;
  children: React.ReactNode;
};

const FilterLink = ({ filter, children }: Props) => (
  <NavLink
    exact
    to={`/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;

