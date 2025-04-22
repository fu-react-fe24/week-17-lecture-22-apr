import Nav from "../components/Nav/Nav"
import TodoList from "../components/TodoList/TodoList"

function TodoPage() {
  
  return (
    <section className="page">
        <Nav page="todo" />
        <h1>TodoPage</h1>
        <TodoList />
    </section>
  )
}

export default TodoPage
