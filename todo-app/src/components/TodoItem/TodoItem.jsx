import './todoItem.css';

function TodoItem({todo}) {
  return (
    <li 
        className="todo-list__item"
        style={{ backgroundColor: todo.completed ? 'green' : 'red' }}
        onClick={() => {}}
    >
        {todo.title}
    </li>
  )
}

export default TodoItem;
