import React, { useState } from 'react'
import SingUpPageLeft from '../../component/AuthManneger/SingUpPageLeft'
import SingUpPageRight from '../../component/AuthManneger/SingUpPageRight'
import LogInPageLeft from '../../component/AuthManneger/LogInPageLeft'
import LogInPageRight from '../../component/AuthManneger/LogInPageRight'
import './../../assets/css/AuthManneger.css'

function Layout() {
  const [StatusPage, setStatusPage] = useState(2);
  return (
    <div className='AuthManneger'>
      <div className='AuthMannegerBackground'></div>

      <div className='AuthMannegerLeft'>
        {StatusPage == 1 && <SingUpPageLeft />}
        {StatusPage == 2 && <LogInPageLeft setStatusPage={setStatusPage} />}
      </div>

      <div className='AuthMannegerRight'>
        {StatusPage == 1 && <SingUpPageRight setStatusPage={setStatusPage} />}
        {StatusPage == 2 && <LogInPageRight />}
      </div>
    </div>
  )
}

export default Layout