import Link from "next/link";
import styles from './css/menuI.module.css'

export default function MenuItem({ href, activeLink, onClick, children }) {
    const isActive = activeLink === href;

    return (
        <Link href={href} className={styles.Link}>
            <div
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                onClick={onClick}
            >
                {children}
            </div>
        </Link>
    );
}
