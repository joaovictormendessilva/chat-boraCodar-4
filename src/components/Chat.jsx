import { useEffect, useRef, useState } from 'react';
import styles from './Chat.module.css';
import { MyMessage } from './MyMessage';
import { PersonMessage } from './personMessage';

import sendIcon from '../assets/sendIcon.png';

export function Chat(){

    const bottomRef = useRef(null);

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
            id: 2,
            name: 'Você',
            hour: '11:36',
            message: "#boraCodar! 🚀"
        }
    ]);

    const [changeValue, setChangeValue] = useState('');

    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();

    function changeValues(event){
        setChangeValue(event.target.value)
    }

    function addMessage(event){
        event.preventDefault();

        const message = {
            id: '1',
            name: 'Você',
            hour: `${hora}:${minuto}`,
            message: changeValue
        }

        setMessages([...messages, message])
        setChangeValue('');
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages])

    return(
        <div className={styles.Chat}>
            <div className={styles.date}>
                Hoje 11:30
            </div>

            <div className={styles.messages}>
                
                {messages.map((message, index) => {
                    return message.name === 'Você' ? 
                            <MyMessage key={index} name={message.name} hour={message.hour} message={message.message}/> 
                            : 
                            <PersonMessage key={index} name={message.name} hour={message.hour} message={message.message}/>
                })}
            </div>

            <div className={styles.sendBox}>
                <input type="text" name='message' placeholder='Digite sua mensagem' onChange={changeValues} value={changeValue}></input>
                <button onClick={addMessage}>
                    <img src={sendIcon} alt="Botão de enviar" />
                </button>
            </div>

            <div ref={bottomRef}></div>
        </div>
    )
}