
import Menu from '../ui/components/surfaces/menu'
import Calendar from "../ui/components/calendar/calendar";
import styles from './css/agenda.module.css'

export default function Agenda() {
    return (
        <div className={styles.agenda}>
            <Menu />

            <div className={styles.calendar}>
                <div className={styles.tags}>
                   <h2> SUAS TAGS</h2>
                   <ul>
                    <li style={{color:'rgb(11, 86, 151)', backgroundColor:'rgb(186, 223, 255)', padding:'5px',width:'29%', borderRadius:'5px', fontWeight:'bold'}}>REUNIÃO</li>
                    <li  style={{color:'rgb(199, 184, 23)', backgroundColor:'rgb(255, 245, 131)', padding:'5px',width:'41%', borderRadius:'5px', fontWeight:'bold'}}>PUBLICAÇÃO</li>
                    <li  style={{color:'rgb(255, 0, 136)', backgroundColor:'rgb(255, 209, 234)', padding:'5px',width:'32%', borderRadius:'5px', fontWeight:'bold'}}>PARCERIA</li>
                   </ul>
                </div>
                <div className={styles.calendario}>
                    <Calendar />
                </div>
            </div>

        </div>
    )
}