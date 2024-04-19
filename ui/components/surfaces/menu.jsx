import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.imagem}>
                <img src="" alt="" />  {/*Aqui vem extraído a foto correspondente ao inf*/}
            </div>

            <nav>
                <Link href="/Dashboard" className={styles.link}>
                    Dashboard
                </Link>
                <Link href="/Agenda" className={styles.link}>
                    Agenda
                </Link>
                <Link href="/Metas" className={styles.link}>
                    Metas
                </Link>
                <Link href="/Publicacoes" className={styles.link}>
                    Publicações
                </Link>
                <Link href="/Influenciadores" className={styles.link}>
                    Influenciadores
                </Link>
                <Link href="/Projetos" className={styles.link}>
                    Projetos
                </Link>
            </nav>


        </div>
    )
}