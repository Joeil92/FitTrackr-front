import { ReactNode } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import styles from './layout.module.css';

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Sidebar />
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}