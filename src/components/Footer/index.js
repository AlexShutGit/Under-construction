import React from 'react';

function Footer({ emailHandler, email, formValid, onClickSubmit }) {
    return (<div className='footer d-flex justify-center'>
        <form className='sendMail d-flex align-center justify-between'>
            <input onChange={e => emailHandler(e)} value={email} className='email' type="email" id='mail' placeholder='Enter your Email and get notified'></input><img className='arrowSubmit' src={formValid ? 'img/arrowSubmit.svg' : 'img/arrowSubmitDisabled.png'} onClick={onClickSubmit} alt='arrow' />
        </form>
    </div>
    )
}

export default Footer