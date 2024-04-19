import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";

const router = createBrowserRouter([
    {
        path: "/",
        element : <></>
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;