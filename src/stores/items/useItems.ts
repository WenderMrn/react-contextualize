import { useReducer } from "react";

import reducer, { initialState } from "./reducer";

export function useItems() {
  const [itemsState, itemsDispatch] = useReducer(reducer, initialState);

  return {
    itemsState,
    itemsDispatch,
  };
}
