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
import Components from './pages/Components';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/components" element={<Components />} />
          <Route path="/grids" element={<Grids />} />
          <Route path="/flexbox" element={<Flexbox />} />
          <Route path="/clones" element={<Clones />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

function Grids() {
  return (
    <main className="main">
      <h2>Em desenvolvimento...</h2>
    </main>
  );
}
function Flexbox() {
  return (
    <main className="main">
      <h2>Em desenvolvimento...</h2>
    </main>
  );
}
function Clones() {
  return (
    <main className="main">
      <h2>Em desenvolvimento...</h2>
    </main>
  );
}

export default App
