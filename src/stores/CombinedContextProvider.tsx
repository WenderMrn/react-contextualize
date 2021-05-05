import React from "react";

import { CountContextDispatch } from "./count/context";
import { ItemsContextDispatch } from "./items/context";

import { CountDispatch } from "./count/types";
import { ItemsDispatch } from "./items/types";

type Props = {
  dispatchs: {
    countDispatch: CountDispatch;
    itemsDispatch: ItemsDispatch;
  };
};

const CombinedContextProvider: React.FC<Props> = ({ children, dispatchs }) => {
  const { countDispatch, itemsDispatch } = dispatchs;

  return (
    <CountContextDispatch.Provider value={countDispatch}>
      <ItemsContextDispatch.Provider value={itemsDispatch}>
        {children}
      </ItemsContextDispatch.Provider>
    </CountContextDispatch.Provider>
  );
};

export { CombinedContextProvider };
