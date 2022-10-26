import { IUser } from './../models/IUser';
import { userAction, UserActionTypes, UserState } from "types/user";

const initialState: UserState = {
  user: [],
  error: null,
  loading: false
}

export const userReducer = (state = initialState, action: userAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { user: [], error: null, loading: true }
    case UserActionTypes.FETCH_USER_SUCCESS: 
      return { user: action.payload, error: null, loading: false }
    case UserActionTypes.FETCH_USER_ERROR: 
      return { user: [], error: action.payload, loading: false }
    default:
      return state;
  }
}

export const setUser = (payload: IUser[]) => ({ type: UserActionTypes.FETCH_USER_SUCCESS, payload });
export const fetchUser = (payload: number) => ({ type: UserActionTypes.FETCH_USER, payload });