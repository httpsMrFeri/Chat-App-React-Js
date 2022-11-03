import React from 'react'

function AgentPage({ setWitchPage }) {
  function HandlerChekValue() {
    setWitchPage(3)
  }
  return (
    <div className='AgentPage AuthMannegerBoxDiv'>
      <div className='AgentPageText'>
        <p>Please ask your agent to confirm you</p>
      </div>
      <div className='AgentPageButton'>
        <button className='InputButton' id='AgentPageButtonCheck' onClick={()=>HandlerChekValue()}>Check Again</button>
        <button className='InputButton' id='AgentPageButtonAccounte'>Make Another Account</button>
      </div>
    </div>
  )
}

export default AgentPage