import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Root from "../pages/root/root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "login",
                element: <Login />
            }
        ]
    }
]);

export default router;