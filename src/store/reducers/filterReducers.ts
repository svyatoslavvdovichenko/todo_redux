import { filterAction, filterActionTypes, filterState, typeFilter } from "types/filter";

const initialState: filterState = {
  filter: typeFilter.showAll,
}

export const visibilityReducer = (state = initialState, action: filterAction): filterState => {
  switch (action.type) {
    case filterActionTypes.SET_FILTER:
      return { filter: action.payload }
    default:
      return state;
  }
} 