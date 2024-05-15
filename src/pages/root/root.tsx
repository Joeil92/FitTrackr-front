import { Outlet } from "react-router-dom";
import { User } from "../../services/providers/authProvider/types/user.interface";
import { AuthProvider } from "../../services/providers/authProvider/authProvider";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "./root.module.css";

export interface OutletContextProps {
    user: User
}

export default function Root() {
    return (
        <>
            <Sidebar />
            <main className={styles.main}>
                <Outlet context={{ user: AuthProvider.user }} />
            </main>
        </>
    )
}