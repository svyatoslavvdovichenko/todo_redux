import { alertAction, alertActionTypes, alertState, } from "types/alert";

const initialState: alertState = {
  alert: "",
  isVisibleAlert: false
}

export const alertReducer = (state = initialState, action: alertAction): alertState => {
  switch (action.type) {
    case alertActionTypes.SET_ALERT:
      return { alert: action.payload.alert, isVisibleAlert: action.payload.isVisibleAlert }
    default:
      return state;
  }
} 