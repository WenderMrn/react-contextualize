import { AddCountAction, MinusCountAction } from "stores/count/actions";
import { useCount } from "stores/count/useCount";

function Count() {
  const { countState, countDispatch } = useCount();

  return (
    <>
      <h1>My count: {countState.count}</h1>
      <button onClick={() => countDispatch(AddCountAction())}>Increment</button>
      <button onClick={() => countDispatch(MinusCountAction())}>
        Decrement
      </button>
    </>
  );
}

export default Count;
