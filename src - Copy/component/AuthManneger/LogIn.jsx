import React from 'react'

function LogIn({ setWitchPage }) {
    function HandlerChekValue() {
        console.log("fuuuuun")
        let inputValue = document.querySelector('#UserUserName')
        inputValue.value == null | inputValue.value == "" ? alert('Please Enter UserName') : setWitchPage(1)
    }

    return (
        <div className='LogIn AuthMannegerBoxDiv'>
            <div className='AuthMannegerPageName'>
                <h2>Login</h2>
            </div>
            <div className='Form'>
                <div>
                    <input type="text" id='UserUserName' className='InputText Input' placeholder='User Name' />
                    <input type="Password" id='UserPassword' className='InputPassword Input' placeholder='Password' />
                    <button id='UserFormSubmit' className='InputSubmit Input' onClick={() => HandlerChekValue()}>LogIn</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn