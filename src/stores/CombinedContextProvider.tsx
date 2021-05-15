import React from "react";

import { CountContextDispatch } from "./count/context";
import { ItemsContextDispatch } from "./items/context";

import { useCount } from "stores/count/useCount";
import { useItems } from "stores/items/useItems";

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

export { CombinedContextProvider };
