import { useState } from 'react';
import styles from './Chat.module.css';
import { MyMessage } from './MyMessage';
import { PersonMessage } from './personMessage';

import sendIcon from '../assets/sendIcon.png';

export function Chat(){

    const [messages, setMessages] = useState([
        {
            id: 1,
            name: 'Cecilia',
            hour: '11:30',
            message: "Tive uma ideia incrível para um projeto! 😍"
        },
        {
            id: 2,
            name: 'Você',
            hour: '11:32',
            message: "Sério? Me conta mais."
        },
        {
            id: 1,
            name: 'Cecilia',
            hour: '11:34',
            message: "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"
        },
        {
            id: 1,
            name: 'Você',
            hour: '11:36',
            message: "#boraCodar! 🚀"
        }
    ]);

    return(
        <div className={styles.Chat}>
            <div className={styles.date}>
                Hoje 11:30
            </div>

            <div className={styles.messages}>
                
                {messages.map((message) => {
                    return message.name === 'Você' ? 
                            <MyMessage key={message.id} name={message.name} hour={message.hour} message={message.message}/> 
                            : 
                            <PersonMessage key={message.id} name={message.name} hour={message.hour} message={message.message}/>
                })}
            </div>

            <div className={styles.sendBox}>
                <input type="text" placeholder='Digite sua mensagem'></input>
                <button>
                    <img src={sendIcon} alt="Botão de enviar" />
                </button>
            </div>
        </div>
    )
}