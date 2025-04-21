import Router from "./router/Router"
import {useEffect} from "react";
import {useFetchTodos} from "./hooks/useFetchTodos";

function App() {

  const {todos, isLoading, isError} = useFetchTodos();

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log(todos);
      
    }
  }, [todos]);

  return (
    <div className="app">
      <Router todos={todos} />
    </div>
  )
}

export default App
