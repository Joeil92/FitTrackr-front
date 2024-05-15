import { redirect } from "react-router-dom";
import { AuthProvider } from "../../services/providers/authProvider/authProvider";

export default async function protectedLoader() {
    const token = localStorage.getItem('fitTrackrToken');

    if (token) AuthProvider.signin(token);

    if (!AuthProvider.isAuthenticated) return redirect('/login');

    return null;
}