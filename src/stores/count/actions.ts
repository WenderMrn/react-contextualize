import { ActionTypes, CountActionType, MinusActionType } from "./types";

function AddCountAction(): CountActionType {
  return {
    type: ActionTypes.IncrementCount,
    payload: undefined,
  };
}

function MinusCountAction(): MinusActionType {
  return {
    type: ActionTypes.DecrementCount,
    payload: undefined,
  };
}

export { AddCountAction, MinusCountAction };
