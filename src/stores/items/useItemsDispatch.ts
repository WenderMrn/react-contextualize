import { useReducer } from "react";

import reducer, { initialState } from "./reducer";

export function useItemsDispatch() {
  const [listState, itemsDispatch] = useReducer(reducer, initialState);

  return {
    listState,
    itemsDispatch,
  };
}
