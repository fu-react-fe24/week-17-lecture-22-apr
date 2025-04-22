import './index.css';
import { useTodoStore } from '@myApp/stores/data/useTodoStore';

export function Button() {
  const { setTodo } = useTodoStore();
  return (
    <button onClick={setTodo}>Klicka mig</button>
  )
}

