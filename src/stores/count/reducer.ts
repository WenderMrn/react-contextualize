import { ActionTypes, Action, CountState } from "./types";

const initialState: CountState = {
  count: 0,
};

function reducer(state: CountState, action: Action) {
  switch (action.type) {
    case ActionTypes.IncrementCount:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DecrementCount:
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
}

export { initialState };
export default reducer;
