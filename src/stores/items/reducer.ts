import { ActionTypes, Action, ItemsState } from "./types";

const initialState: ItemsState = {
  items: [],
};

function reducer(state: ItemsState, action: Action): ItemsState {
  switch (action.type) {
    case ActionTypes.AddItem: {
      const list = [...state.items];
      list.push(action.payload);

      return { ...state, items: list };
    }
    case ActionTypes.RemoveItem: {
      const list = [...state.items];
      list.splice(action.payload, 1);

      return { ...state, items: list };
    }
    default:
      return { ...state };
  }
}

export { initialState };
export default reducer;
