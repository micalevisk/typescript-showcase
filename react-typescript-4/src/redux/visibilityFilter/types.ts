export const SET_VISIBILITY_FILTER = '@visibilityFilter/SET_VISIBILITY_FILTER';

const SHOW_ALL = 'SHOW_ALL';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const VisibilityFilters = { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE };

export type VisibilityFilter =
  | typeof SHOW_ALL
  | typeof SHOW_COMPLETED
  | typeof SHOW_ACTIVE;

interface setVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  payload: {
    filter: VisibilityFilter;
  };
}

export type VisibilityFilterActionTypes = Readonly<setVisibilityFilterAction>;
