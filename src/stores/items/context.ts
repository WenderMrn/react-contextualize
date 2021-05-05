import React from "react";

import { ItemsDispatch } from "./types";

const defaultDispatch = () => {};

export const ItemsContextDispatch = React.createContext<ItemsDispatch>(
  defaultDispatch
);
