import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoPage from "../pages/TodoPage";
import FormPage from "../pages/FormPage";

const Router = () => {

    const router = createBrowserRouter([
        {
            path : '/',
            element : <TodoPage />
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