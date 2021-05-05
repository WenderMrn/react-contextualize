import { action } from "..";
import { ActionTypes, CountActionType, MinusActionType } from "./types";

function AddCountAction(): CountActionType {
  return action(ActionTypes.IncrementCount, undefined);
}

function MinusCountAction(): MinusActionType {
  return action(ActionTypes.DecrementCount, undefined);
}

export { AddCountAction, MinusCountAction };
