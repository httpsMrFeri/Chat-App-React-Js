import React, { useState } from 'react'
import SingUp from './SingUp'
import MakeUser from './SingUpMakeUser'
import AgentPage from './SingUpAgentPage'
function SingUpPageLeft() {
    const [WitchPage, setWitchPage] = useState(0);
    return (
        <>
            {WitchPage == 0 && <SingUp setWitchPage={setWitchPage} />}
            {WitchPage == 1 && <MakeUser setWitchPage={setWitchPage} />}
            {WitchPage == 2 && <AgentPage setWitchPage={setWitchPage} />}
        </>
    )
}

export default SingUpPageLeft