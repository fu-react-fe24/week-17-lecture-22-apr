import './index.css';
import { useTodoStore } from '@myApp/stores/data/useTodoStore';

export function Todo() {
  const { todo } = useTodoStore();
  return (
    <p>{todo}</p>
  )
}

