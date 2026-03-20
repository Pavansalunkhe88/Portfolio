import React from 'react'
import { useState } from 'react'
import Dock from './compontes/Dock'
import Nav from './compontes/Nav'
import Github from './compontes/windows/Github'
import Note from './compontes/windows/Note'
import Resume from './compontes/windows/Resume'
import Spotify from './compontes/windows/Spotify'
import Cli from './compontes/windows/Cli'


function App() {

  const [windowState, setwindowState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
  })
  return (
    
      <main >
        <Nav/>
        <Dock windowState={windowState} setwindowState={setwindowState}/>
       {windowState.github &&  <Github windowName="github" setwindowState={setwindowState}/>}
       {windowState.note &&  <Note windowName="note" setwindowState={setwindowState}/>}
       {windowState.resume &&  <Resume windowName="resume" setwindowState={setwindowState}/>}
       {windowState.spotify &&  <Spotify windowName="spotify"setwindowState={setwindowState}/>}
       {windowState.cli &&  <Cli windowName="cli" setwindowState={setwindowState}/>}
      </main>
    
  )
}

export default App
