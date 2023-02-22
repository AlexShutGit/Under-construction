import React from 'react';
import Timer from '../Timer';
// import styles from './Main.module.scss'

function Main({ days, hours, minutes, seconds }) {
    return (
        <div className='main'>
            <a href='/'>
                <img className='logo' src='img/logo.svg' alt='logo'></img>
            </a>
            <div className='text'>
                <h1>UNDER CONSTRUCTION</h1>
                <h2 className='description'>We're making lots of improvements and will be back soon</h2>
            </div>
            <div className='timer'>
                <Timer text="Days" number={days} /><h1>:</h1>
                <Timer text="Hours" number={hours} /><h1>:</h1>
                <Timer text="Minutes" number={minutes} /><h1>:</h1>
                <Timer text="Seconds" number={seconds} />
            </div>
            <div className='textButton d-flex align-center justify-between'>
                <h2>Check our event page when you wait:</h2>
                <a href='https://vk.com/'>
                    <div className='button '>
                        <h2>Go to the event</h2>
                        <img src='img/arrow.svg' alt='arrow' />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Main;