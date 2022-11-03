import React, { useState } from 'react'
import LogIn from './LogIn'; 
import WelcomeBacke from './WelcomeBacke';

function LogInPageRight() {
  const [WitchPage, setWitchPage] = useState(0);
  return (
        <>
        {WitchPage == 0 && <LogIn setWitchPage={setWitchPage}/>}
        {WitchPage == 1 && <WelcomeBacke/>}
        </>
    )
}

export default LogInPageRight