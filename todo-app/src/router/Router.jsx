import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoPage from "../pages/TodoPage";
import FormPage from "../pages/FormPage";

const Router = ({todos}) => {

    const router = createBrowserRouter([
        {
            path : '/',
            element : <TodoPage todos={todos} />
        },
        {
            path : '/form',
            element : <FormPage />
        }
    ]);
    
    return (
        <RouterProvider router={router} />
    )
}

export default Router;