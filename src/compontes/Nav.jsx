import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

function Nav() {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon"><img src="./nav-icons/apple.svg" alt="" /></div>
            <div className="nav-items">Pavan Salunkhe</div>
            <div className="nav-items">File</div>
            <div className="nav-items">Window</div>
            <div className="nav-items">Terminal</div>
        </div>
        <div className="right">
            <div className="nav-icon"><img src="./nav-icons/wifi.svg" alt="" /></div>
            <div className="nav-items"><DateTime/></div>
        </div>
        
    </nav>
  )
}

export default Nav
