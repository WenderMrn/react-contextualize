import { useState } from "react";
import "./styles.css";

import { CombinedContextProvider } from "./stores/CombinedContextProvider";

// count
import { AddCountAction, MinusCountAction } from "./stores/count/actions";
import { useCountDispatch } from "./stores/count/useCountDispatch";

// list
import { useItemsDispatch } from "./stores/items/useItemsDispatch";
import { AddItemAction, removeItemByIndexAction } from "./stores/items/actions";

export default function App() {
  const [fieldName, setFieldName] = useState("");
  const { countState, countDispatch } = useCountDispatch();
  const { listState, itemsDispatch } = useItemsDispatch();

  return (
    <CombinedContextProvider dispatchs={{ itemsDispatch, countDispatch }}>
      <div className="App">
        <h1>My count: {countState.count}</h1>
        <button onClick={() => countDispatch(AddCountAction())}>
          Increment
        </button>
        <button onClick={() => countDispatch(MinusCountAction())}>
          Decrement
        </button>
        <br />
        <br />
        <h1>List Items</h1>
        <hr style={{ width: 500 }} />
        {listState.items.length > 0 && (
          <div className="items">
            {listState.items.map((item, index) => (
              <div className="item" key={item}>
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
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
        <button
          onClick={() => {
            if (!fieldName) return;
            itemsDispatch(AddItemAction(fieldName));
            setFieldName("");
          }}
        >
          add item
        </button>
      </div>
    </CombinedContextProvider>
  );
}
