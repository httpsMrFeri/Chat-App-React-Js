import React from 'react';

function MakeUser({ setWitchPage}) {
    function HandlerChekValue() {
        console.log("fuuuuun")
        let inputValue = document.querySelector('#UserUserName')
        inputValue.value == null | inputValue.value == "" ? alert('Please Enter UserName') : setWitchPage(2)
    }

    return (
        <div className='MakeUser AuthMannegerBoxDiv'>
            <div className='AuthMannegerPageName'>
                <h2>Sing Up</h2>
            </div>
            <div className={'Form'}>
                <div>
                    <input type="text" id='UserUserName' className='InputText Input' placeholder='User Name' />
                    <input type="Password" id='UserPassword' className='InputPassword Input' placeholder='Password' />
                    <input type="Password" id='UserRePassword' className='InputPassword Input' placeholder='Re-Password' />
                    <button id='UserFormSubmit' className='InputSubmit Input' onClick={() => HandlerChekValue()}>Sing Up</button>
                </div>
            </div>
        </div>
    );
}

export default MakeUser;