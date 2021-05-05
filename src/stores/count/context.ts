import React from "react";

import { CountDispatch } from "./types";

const defaultDispatch = () => {};

export const CountContextDispatch = React.createContext<CountDispatch>(
  defaultDispatch
);
