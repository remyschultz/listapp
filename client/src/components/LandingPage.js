import React from 'react'
import LoginLogout from './LoginLogout'

const LandingPage = () => {
  return (
    <div className="login-container d-flex flex-column justify-content-between">
        <div className="flex-row">
            <h1 className='text-center welcome'>Welcome</h1>
            <hr className='hr-welcome'/>
        </div>
        <div className="flex-row">
            <div className='text-center'>
                <LoginLogout />

            </div>
        </div>
        <div className="row align-items-end">
            <p className='text-center welcome-text'>
                Please log in or create an account to continue. <br/>
                Your credentials are stored securely with Auth0.
            </p>
        </div>
    </div>
  )
}

export default LandingPage