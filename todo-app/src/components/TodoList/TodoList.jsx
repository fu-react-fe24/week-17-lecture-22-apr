import TodoItem from "../TodoItem/TodoItem";
import './todoList.css';
import useTodoStore from "../../stores/useTodoStore";

function TodoList() {
  const { todos } = useTodoStore();
  
  return (
    <ul className="todo-list">
        {
            todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
    </ul>
  )
}

export default TodoList;
