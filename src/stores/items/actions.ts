import { ActionTypes, AddItemActionType, removeItemActionType } from "./types";

function AddItemAction(item: string): AddItemActionType {
  return {
    type: ActionTypes.AddItem,
    payload: item,
  };
}

function removeItemByIndexAction(index: number): removeItemActionType {
  return {
    type: ActionTypes.RemoveItem,
    payload: index,
  };
}

export { ActionTypes, AddItemAction, removeItemByIndexAction };
