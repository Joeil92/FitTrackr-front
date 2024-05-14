import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Root from "../pages/root/root";
import Dashboard from "../pages/dashboard/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
]);

export default router;