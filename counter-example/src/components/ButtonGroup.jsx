import Button from "./Button";
import useCountStore from "../stores/useCountStore";

function ButtonGroup() {
  // const increment = useCountStore(state => state.increment);
  // const decrement = useCountStore(state => state.decrement);
  // const reset = useCountStore(state => state.reset);

  const { increment, decrement, reset } = useCountStore();

  return (
    <section>
        <Button text="Decrement" onClick={decrement} />
        <Button text="Increment" onClick={increment} />
        <Button text="Reset" onClick={reset} />
    </section>
  )
}

export default ButtonGroup;
