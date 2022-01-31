import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg'
import './styles/App.css'

import Sidebar from './components/Sidebar'
import Main from './pages/Main'
import Effects from './pages/Effects'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/user" element={<Users />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

function Users() {
  return <h2>Users</h2>;
}

export default App
