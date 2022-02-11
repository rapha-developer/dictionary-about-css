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
import Grids from './pages/Grids';
import Flex from './pages/Flex';

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
          <Route path="/flexbox" element={<Flex />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}


export default App
