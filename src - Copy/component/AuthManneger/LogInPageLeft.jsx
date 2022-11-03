import React from 'react'

function LogInPageLeft({ setStatusPage }) {
    function HandlerStatus() {
        setStatusPage(1)
    }
    return (
        <>
            <div className='SingUpBoxText'>
                <h2>Don't Have Account?</h2>
            </div>
            <div className='SingUpBoxButton'>
                <button id='SingUpButton' onClick={() => HandlerStatus()}>Sing Up</button>
            </div>
        </>
    )
}

export default LogInPageLeft