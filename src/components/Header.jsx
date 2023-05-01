import styles from './Header.module.css';

import Avatar from '../assets/Avatar.png'
import CloseButton from '../assets/x.svg'

export function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.avatarAndStatus}>
                <div>
                    <img src={Avatar} alt="Avatar do usuário" />
                </div>
                <div className={styles.nameAndStatus}>
                    <h2 className={styles.personName}>Cecilia Sassaki</h2>
                    <span className={styles.status}>Online</span>
                </div>
            </div>

            <div className={styles.closeButton}>
                <button>
                    <img src={CloseButton} alt="Botão de fechar chat" />
                </button>
            </div>
        </div>
    );
}