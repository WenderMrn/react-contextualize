import React from "react";

import { ActionType } from "../types";

export enum ActionTypes {
  AddItem = "AddItem",
  RemoveItem = "RemoveItem",
}

export type AddItemActionType = ActionType<ActionTypes.AddItem, string>;
export type removeItemActionType = ActionType<ActionTypes.RemoveItem, number>;

export type Action = AddItemActionType | removeItemActionType;
export type ItemsDispatch = React.Dispatch<Action>;

export type ItemsState = {
  items: string[];
};
