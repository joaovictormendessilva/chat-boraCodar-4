import styles from './Chat.module.css';

export function PersonMessage({ name, hour, message }){
    return (
        <div className={styles.personMessage}>
            <div className={styles.nameAndHourMessage}>
                <h4>{name} - {hour}</h4>
            </div>
            <div className={styles.personMessageBox}>
                <span>
                    {message}
                </span>
            </div>
        </div>
    )
}