import { userAction, UserActionTypes, UserState } from "types/user";

const initialState: UserState = {
  users: [],
  error: null,
  loading: false
}

export const userReducer = (state = initialState, action: userAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_SUCCESS: 
      return { users: action.payload, error: null, loading: false }
    default:
      return state;
  }
}