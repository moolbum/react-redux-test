import { ActionType } from "../action-types/types";
import { Action } from "../action/index";

const INITIAL_STATE = 0;

const bankReducer = (state: number = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
