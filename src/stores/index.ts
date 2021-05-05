import React from "react";

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
