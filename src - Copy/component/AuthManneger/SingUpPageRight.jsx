import React from 'react'

function SingUpPageRight({ setStatusPage }) {
    function HandlerStatus() {
        setStatusPage(2)
    }
    return (
        <>
            <div className='LogInBoxText'>
                <h2>Do You Have Account?</h2>
            </div>
            <div className='LogInBoxButton'>
                <button id='LogInButton' onClick={()=> HandlerStatus()}>Log In</button>
            </div>
        </>
    )
}

export default SingUpPageRight