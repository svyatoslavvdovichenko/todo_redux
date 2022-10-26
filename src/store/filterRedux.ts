import { filterAction, filterActionTypes, filterState } from "types/filter";

const initialState: filterState = {
  filter: "showAll",
}

export const visibilityReducer = (state = initialState, action: filterAction): filterState => {
  switch (action.type) {
    case filterActionTypes.SET_FILTER:
      return { filter: action.payload }
    default:
      return state;
  }
}

export const setVisibilityFilter = (payload: string) => ({ type: filterActionTypes.SET_FILTER, payload }) 