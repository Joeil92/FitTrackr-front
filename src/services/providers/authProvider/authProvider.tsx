import { jwtDecode } from "jwt-decode";
// import { ReactNode, createContext, useEffect, useState } from "react"
// import { useLocation, useNavigate } from "react-router-dom";
import { User } from "./types/user.interface";
// import { AuthContextProps, AuthState } from "./types/auth.interface";

// interface Props {
//     children: ReactNode
// }
// export const authContext = createContext<AuthContextProps>({
//     isConnected: false,
//     user: null,
//     login: () => { },
//     logout: () => { }
// });

// export const AuthProvider = ({ children }: Props) => {
//     const [auth, setAuth] = useState<AuthState>({ isConnected: false, user: null });
//     const navigate = useNavigate();
//     const location = useLocation();

//     const login = (token: string) => {
//         localStorage.setItem('fitTrackrToken', token);

//         const decodedToken = jwtDecode<User>(token);

//         if (Date.now() >= decodedToken.exp * 1000) return logout();

//         setAuth({
//             isConnected: true,
//             user: decodedToken
//         })

//         if (location.pathname === "/login") {
//             navigate('/');
//         }
//     }

//     const logout = () => {
//         localStorage.removeItem('fitTrackrToken');

//         navigate('/login');
//     }

//     useEffect(() => {
//         const token = localStorage.getItem('fitTrackrToken');

//         if (token) {
//             login(token);
//         } else {
//             navigate('/login');
//         }
//     }, []);

//     return (
//         <authContext.Provider value={{ isConnected: auth.isConnected, user: auth.user, login, logout }}>
//             {children}
//         </authContext.Provider>
//     )
// }

interface AuthProviderInterface {
    isAuthenticated: boolean;
    user: User | null;
    signin(t: string): void;
    signout(): void;
}

export const AuthProvider: AuthProviderInterface = {
    isAuthenticated: false,
    user: null,
    signin(token: string) {
        try {
            localStorage.setItem('fitTrackrToken', token);

            const decodedToken = jwtDecode<User>(token);

            if (Date.now() >= decodedToken.exp * 1000) return this.signout();

            this.user = decodedToken
            this.isAuthenticated = true;
        } catch (error) {
            console.log(error);
            return this.signout();
        }
    },
    signout() {
        localStorage.removeItem('ogaToken');
        this.user = null;
        this.isAuthenticated = false;
    },
};