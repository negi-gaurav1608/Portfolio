import React from 'react'
import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
function App() {

  return (
    <>
      <Sidenav/>
      <Home/>
      <About/>
      <Work/>
      <Projects/>
      <Contacts/>
    </>
  )
}

export default App
