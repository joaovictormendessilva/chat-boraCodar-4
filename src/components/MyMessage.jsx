import styles from './Chat.module.css'

export function MyMessage({ name, hour, message }) {
    return (
        <div className={styles.myMessage}>
            <div className={styles.nameAndHourMessage}>
                <h4>{name} - {hour}</h4>
            </div>
            <div className={styles.myMessageBox}>
                <span>
                    {message}
                </span>
            </div>
        </div>
    )
}