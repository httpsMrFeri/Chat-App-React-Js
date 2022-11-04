import React from 'react'

function LogIn({ setWitchPage }) {
    function HandlerChekValue() {
        console.log("fuuuuun")
        let UserNameValue = document.querySelector('#UserUserName'), PasswordValue = document.querySelector('#UserPassword')
        UserNameValue.value == null | UserNameValue.value == "" ?
            alert('Please Enter UserName') :
            UserNameValue.value == "Admin" ?
                PasswordValue.value == "Admin" ?
                    setWitchPage(1) :
                    alert('Worng Password') :
                alert('Enter Valid User')
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