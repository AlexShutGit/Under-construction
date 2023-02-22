import React from 'react';
import styles from './Timer.module.scss';

function Timer({ text, number }) {
    return (
        <div className={styles.timer}>
            <h1>{number < 10 ? '0' + number : number}</h1>
            <div className='container'>
                <img /*src='img/timerTitle.svg'*/ alt='svg'></img>
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default Timer;