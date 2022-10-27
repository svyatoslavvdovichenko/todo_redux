export interface filterState {
  filter: string;
}

export enum filterActionTypes {
  SET_FILTER = "SET_FILTER",
}

export enum typeFilter {
  showAll = "showAll",
  showDone = "showDone",
  showUnDone = "showUnDone"
}

export interface filterAction {
  type: filterActionTypes.SET_FILTER;
  payload: string;
}