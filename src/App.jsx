import { useState } from 'react'
import logo from './logo.svg'
import './styles/App.css'

import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {

  return (
    <div>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
