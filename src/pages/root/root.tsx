import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../services/providers/authProvider/authProvider";

export default function Root() {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    )
}