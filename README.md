# React Contextualize

### Demo: https://codesandbox.io/s/react-contextualize-31uu1<br/><br/>

### Requirements

- react >= 17.0.2
- react-dom >= 17.0.2
- react-scripts => 4.0.0
- typescript >= 4.1.3

## Project

This is a simple study project with a two states. The first state keeps the count data and the second keeps the items data, both states are stored inside the self context. The contexts are managed with actions and reducers to change the state. This a simple example of how you can use the React Api Context like a Redux work. If you wanna or need to manage complex or multiple states on React without using any other library it you can use only API context that React provides us.

### Know more about API Context: https://reactjs.org/docs/context.html<br/><br/>

## Modeling our action

stores/items/actions.ts

```ts
export type ActionType<T, P = undefined> = {
  type: T;
  payload: P;
};

export type Dispatch<T = any> = React.Dispatch<T>;

export function action<T, P>(type: T, payload: P): ActionType<T, P> {
  return {
    type,
    payload,
  };
}

export enum ActionTypes {
  AddItem = "AddItem",
  RemoveItem = "RemoveItem",
}

function AddItemAction(item: string): AddItemActionType {
  return action(ActionTypes.AddItem, item);
}

function removeItemByIndexAction(index: number): removeItemActionType {
  return action(ActionTypes.RemoveItem, index);
}
```

## Modeling our reducer<br />

stores/items/reducer.ts

```ts
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
```

## Dispatch a action

components/Items/item.tsx

```ts
import { useState } from "react";

import { useItems } from "stores/items/useItems";
import { AddItemAction, removeItemByIndexAction } from "stores/items/actions";

function Items() {
  const [itemName, setItemName] = useState("");
  const { listState, itemsDispatch } = useItems();

  const handleAddItem = () => {
    if (!itemName) return;
    itemsDispatch(AddItemAction(itemName));
    setItemName("");
  };

  return (
    <>
      <h1>List Items</h1>
      <hr style={{ width: 500 }} />
      {listState.items.length > 0 && (
        <div className="items">
          {listState.items.map((item, index) => (
            <div className="item" key={index}>
              {item}{" "}
              <button
                onClick={() => itemsDispatch(removeItemByIndexAction(index))}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        onKeyUp={(e) => {
          e.code === "Enter" && handleAddItem();
        }}
      />
      <button onClick={handleAddItem}>add item</button>
    </>
  );
}

export default Items;
```

### Hook to provide the dispatch and state

```ts
import { useReducer } from "react";

import reducer, { initialState } from "./reducer";

export function useItems() {
  const [listState, itemsDispatch] = useReducer(reducer, initialState);

  return {
    listState,
    itemsDispatch,
  };
}
```

### Simulate a combined reducer with react context

stores/CombinedContextProvider.tsx

```tsx
const CombinedContextProvider: React.FC = ({ children }) => {
  const { countDispatch } = useCount();
  const { itemsDispatch } = useItems();

  return (
    <CountContextDispatch.Provider value={countDispatch}>
      <ItemsContextDispatch.Provider value={itemsDispatch}>
        {children}
      </ItemsContextDispatch.Provider>
    </CountContextDispatch.Provider>
  );
};
```

/App.tsx

```tsx
export default function App() {
  return (
    <CombinedContextProvider>
      <div className="App">
        <Count />
        <Items />
      </div>
    </CombinedContextProvider>
  );
}
```
