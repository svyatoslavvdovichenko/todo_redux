export interface alertState {
  alert: string;
  isVisibleAlert: boolean;
}

export enum alertActionTypes {
  SET_ALERT = "SET_ALERT",
}

export interface alertAction {
  type: alertActionTypes.SET_ALERT;
  payload: {
    alert: string,
    isVisibleAlert: boolean
  }
}