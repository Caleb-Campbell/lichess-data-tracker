import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route, json} from 'react-router-dom'


import Category from './components/Category'
import Nav from './components/Nav'
import Home from './components/Home'
import History from './components/History'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [input, setInput] = useState('')
  const [chessData, setChessData] = useState([])








  


  return (
    <div  className="App">
    <Nav setNavOpen={setNavOpen}  navOpen={navOpen}/>

    <Routes>
      <Route path='/' element={<Home  navOpen={navOpen} />}/>
      <Route path='/elo-history' element={<History setChessData={setChessData}  input={input} setInput={setInput} chessData={chessData} />} />
    </Routes>
    </div>
  )
}

export default App
