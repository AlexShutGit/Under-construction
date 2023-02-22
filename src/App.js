import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState, useEffect } from 'react'
import axios from 'axios';


function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState('');
  const [formValid, setFromValid] = useState(false)
  const [alertShow, setAlertShow] = useState(false)
  const [successSubscribe, setSuccessSubscribe] = useState(true);

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setFromValid(false)
    }
    else {
      setFromValid(true)
    }
  }

  let interval;

  const startTimer = () => {
    const dateEnd = new Date('2023-05-31 00:00:00').getTime();

    interval = setInterval(() => {
      const dateNow = new Date().getTime();
      const distance = dateEnd - dateNow;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / (1000));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    })
  }
  const onClickSubmit = () => {
    try {
      if (formValid) {
        // throw "error"
        axios.post(`https://63f5f568ab76703b15b531a3.mockapi.io/mails`, email)
        setEmail('');
        setFromValid(false)
        setSuccessSubscribe(true)
        setAlertShow(true)
      }
    } catch (error) {
      setSuccessSubscribe(false)
      setAlertShow(true)
    }
  }

  const closeAlert = () => {
    setAlertShow(false);
  }

  useEffect(() => { startTimer() })

  return (
    <div className='wrapper'>
      {alertShow &&
        <div className='overlay'>
          <div className='alert d-flex align-center'>
            <img onClick={closeAlert} src="img/cansel.svg" alt='close'></img>
            <h1>{successSubscribe ? 'SUCCESS!' : 'FAILED!'}</h1>
            <p>{successSubscribe ? 'You have successfully subscribed to the email newsletter' : 'email newsletter subscription error'}</p>
            <div onClick={closeAlert} className='closeButton'><p>Close</p></div>
          </div>
        </div>
      }
      <Header />
      <Main days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <Footer email={email} emailHandler={emailHandler} onClickSubmit={onClickSubmit} formValid={formValid} />
    </div>

  );
}

export default App;