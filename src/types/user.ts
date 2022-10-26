import { IUser } from "models/IUser";

export interface UserState {
  user: IUser[] | null;
  error: string | null;
  loading: boolean;
}

export enum UserActionTypes {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

export interface fetchUserAction {
  type: UserActionTypes.FETCH_USER;
  payload: number;
}

interface fetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: IUser[];
}

interface fetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

export type userAction = 
  | fetchUserAction
  | fetchUserSuccessAction
  | fetchUserErrorAction;