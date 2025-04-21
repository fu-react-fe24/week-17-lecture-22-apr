import Nav from "../components/Nav/Nav"
import TodoList from "../components/TodoList/TodoList"

function TodoPage({todos}) {
  return (
    <section className="page">
        <Nav page="todo" />
        <h1>TodoPage</h1>
        <TodoList todos={todos} />
    </section>
  )
}

export default TodoPage
