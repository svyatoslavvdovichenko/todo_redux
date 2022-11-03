import { IUser } from "models/IUser";

export interface UserState {
  users: IUser[] | null;
  error: string | null;
  loading: boolean;
}

export enum UserActionTypes {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
}

export interface fetchUserAction {
  type: UserActionTypes.FETCH_USER;
  payload: number;
}

interface fetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: IUser[];
}

export type userAction = 
  | fetchUserAction
  | fetchUserSuccessAction;