import Button from "./Button";

function ButtonGroup({setCount}) {

  return (
    <section>
        <Button text="Decrement" onClick={() => setCount(c => c - 1)} />
        <Button text="Increment" onClick={() => setCount(c => c + 1)} />
        <Button text="Reset" onClick={() => setCount(0)} />
    </section>
  )
}

export default ButtonGroup;
