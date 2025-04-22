import './todoItem.css';
import useTodoStore from '../../stores/useTodoStore';

function TodoItem({todo}) {
  const {updateTodo} = useTodoStore();
  return (
    <li 
        className="todo-list__item"
        style={{ backgroundColor: todo.completed ? 'green' : 'red' }}
        onClick={() =>updateTodo(todo.id)}
    >
        {todo.title}
    </li>
  )
}

export default TodoItem;
