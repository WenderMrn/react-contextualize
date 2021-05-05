import { useReducer } from "react";

import reducer, { initialState } from "./reducer";

export function useCountDispatch() {
  const [countState, countDispatch] = useReducer(reducer, initialState);

  return {
    countState,
    countDispatch,
  };
}
