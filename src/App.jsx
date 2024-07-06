import React from 'react'
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
      <Work/>
      <Projects/>
      <Contacts/>
    </>
  )
}

export default App
