import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  VisibilityFilter,
  VisibilityFilterActionTypes,
} from './types';

const INITIAL_STATE = VisibilityFilters.SHOW_ALL as VisibilityFilter;

const visibilityFilter = (
  state = INITIAL_STATE,
  action: VisibilityFilterActionTypes,
): VisibilityFilter => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;