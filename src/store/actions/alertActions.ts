import { alertActionTypes, alertState } from "types/alert";

export const setAlert = (payload: alertState) => ({ type: alertActionTypes.SET_ALERT, payload })