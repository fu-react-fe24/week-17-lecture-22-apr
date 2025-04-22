import Router from "./router/Router"
import {useEffect} from "react";
import {useFetchTodos} from "./hooks/useFetchTodos";
import useTodoStore from "./stores/useTodoStore";

function App() {
  const {todos, isLoading, isError} = useFetchTodos();
  const { setTodos } = useTodoStore();

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log(todos);
      setTodos(todos);
    }
  }, [todos]);

  return (
    <div className="app">
      <Router />
    </div>
  )
}

export default App
