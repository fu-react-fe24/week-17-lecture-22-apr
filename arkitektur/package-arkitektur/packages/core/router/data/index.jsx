import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from '@myApp/landing-page';

export const router = createBrowserRouter([
    {
        path : '/',
        element : <LandingPage />,
        errorElement : <h1>This is not the page you are looking for</h1>
    }
]);
