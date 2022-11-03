import { IUser } from 'models/IUser';
import { UserActionTypes } from "types/user";

export const fetchUser = (payload: number) => ({ type: UserActionTypes.FETCH_USER, payload })
export const setUser = (payload: IUser[]) => ({ type: UserActionTypes.FETCH_USER_SUCCESS, payload })