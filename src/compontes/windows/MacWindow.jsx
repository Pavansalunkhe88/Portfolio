import React from 'react'
import { Rnd } from 'react-rnd'
import "./macwindow.scss"

function MacWindow({ children, setwindowState, windowName, title }) {
  return (
    <Rnd
      default={{
        width: "30vw",
        height: "60vh",
        x: 300,
        y: 200
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() =>
                setwindowState((state) => ({
                  ...state,
                  [windowName]: false,
                }))
              }
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>{title}</p>
          </div>
        </div>

        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindow