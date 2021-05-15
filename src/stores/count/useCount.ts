import { useReducer } from "react";

import reducer, { initialState } from "./reducer";

export function useCount() {
  const [countState, countDispatch] = useReducer(reducer, initialState);

  return {
    countState,
    countDispatch,
  };
}
