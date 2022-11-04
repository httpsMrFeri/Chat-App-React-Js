import React from 'react'

function SingUp({ setWitchPage}) {
  function HandlerChekValue() {
    console.log("fuuuuun")
    let inputValue = document.querySelector('#UserTokenID')
    inputValue.value == '' ? alert('Please Enter TOKEN') : inputValue.value == "Faramarz" ? setWitchPage(1) : alert('Enter Valid TOKEN')
  }

  return (
    <div className='SingUp AuthMannegerBoxDiv'>
      <div className='AuthMannegerPageName'>
        <h2>Sing Up</h2>
      </div>
      <div className='Form'>
        <div>
          <input type={"text"} id='UserTokenID' className='InputText Input' placeholder='Enter Token' />
          <button id='UserTokenSubmit' className='InputSubmit Input' onClick={() => HandlerChekValue()}>Make Account</button>
        </div>
      </div>
    </div>
  )
}

export default SingUp