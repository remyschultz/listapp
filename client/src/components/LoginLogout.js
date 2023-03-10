import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginLogout = () => {
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0()
    if(isAuthenticated) {
        return (
            <button type="button" class="btn btn-outline-primary" onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </button>
        )
    } else {
        return (
            <button type="button" class="btn btn-outline-primary" onClick={() => loginWithRedirect()}>Log In</button>
        )
    }

}

export default LoginLogout