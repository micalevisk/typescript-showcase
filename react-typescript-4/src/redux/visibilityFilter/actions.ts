import {
  SET_VISIBILITY_FILTER,
  VisibilityFilter,
  VisibilityFilterActionTypes,
} from './types';

export const setVisibilityFilter = (
  filter: VisibilityFilter,
): VisibilityFilterActionTypes => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
});
