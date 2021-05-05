import { action } from "../index";
import { ActionTypes, AddItemActionType, removeItemActionType } from "./types";

function AddItemAction(item: string): AddItemActionType {
  return action(ActionTypes.AddItem, item);
}

function removeItemByIndexAction(index: number): removeItemActionType {
  return action(ActionTypes.RemoveItem, index);
}

export { ActionTypes, AddItemAction, removeItemByIndexAction };
