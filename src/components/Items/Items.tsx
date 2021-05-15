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
