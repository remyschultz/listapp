import React from 'react'
import LoginLogout from './LoginLogout'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light border-bottom">
        <div className="nav-item nav-item-left">
          <span className="navbar-brand mb-0 h1">List App</span>
        </div>
        <div className="nav-item nav-item-right">
          <LoginLogout />
        </div>
      </nav>
  )
}

export default Navbar