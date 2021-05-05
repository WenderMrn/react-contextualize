import React from "react";

export type ActionType<T, P = undefined> = {
  type: T;
  payload: P;
};

export type Dispatch<T = any> = React.Dispatch<T>;
