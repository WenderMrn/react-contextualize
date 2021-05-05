import React from "react";

import { ActionType } from "../index";

export enum ActionTypes {
  IncrementCount = "IncrementCount",
  DecrementCount = "DecrementCount",
}

export type CountActionType = ActionType<ActionTypes.IncrementCount>;
export type MinusActionType = ActionType<ActionTypes.DecrementCount>;

export type Action = CountActionType | MinusActionType;
export type CountDispatch = React.Dispatch<Action>;

export type CountState = {
  count: number;
};
