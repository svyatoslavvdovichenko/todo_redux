import { filterActionTypes } from "types/filter";

export const setVisibilityFilter = (payload: string) => ({ type: filterActionTypes.SET_FILTER, payload })