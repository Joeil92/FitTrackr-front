import { jwtDecode } from "jwt-decode";
import { ReactNode, createContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "./types/user.interface";
import { AuthContextProps, AuthState } from "./types/auth.interface";

interface Props {
    children: ReactNode
}
export const authContext = createContext<AuthContextProps>({
    isConnected: false,
    user: null,
    login: () => { },
    logout: () => { }
});

export const AuthProvider = ({ children }: Props) => {
    const [auth, setAuth] = useState<AuthState>({ isConnected: false, user: null });
    const navigate = useNavigate();
    const location = useLocation();

    const login = (token: string) => {
        localStorage.setItem('FitTrackrToken', token);

        const decodedToken = jwtDecode<User>(token);

        if (Date.now() >= decodedToken.exp * 1000) return logout();

        setAuth({
            isConnected: true,
            user: decodedToken
        })

        if (location.pathname === "/login") {
            navigate('/');
        }
    }

    const logout = () => {
        localStorage.removeItem('FitTrackrToken');

        navigate('/login');
    }

    useEffect(() => {
        const token = localStorage.getItem('FitTrackrToken');

        if (token) {
            login(token);
        } else {
            navigate('/login');
        }
    }, []);

    return (
        <authContext.Provider value={{ isConnected: auth.isConnected, user: auth.user, login, logout }}>
            {children}
        </authContext.Provider>
    )
}