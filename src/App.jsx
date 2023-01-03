import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import logo from './assets/chessLogo.png'

import Category from './components/Category'
import Nav from './components/Nav'

function App() {
  const [input, setInput] = useState('')
  const [chessData, setChessData] = useState([])
  const [navOpen, setNavOpen] = useState(true)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault() 
    input === '' ? setInput('SopwithCampbell') : setInput(input)
    getData(input)
  }

  const getData = (input) => {
    axios.get(`https://lichess.org/api/user/${input}/rating-history`)
    .then(res => {
      setChessData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
   
  })


  return (
    <div className="App">
      {
        navOpen && (<Nav />)
      }
      <img className='logo' src={logo} />
      <h1>{input}</h1>
     <form onSubmit={handleSubmit}>
      <label className='label'>Enter your lichess username: <br/>
        <input placeholder='SopwithCampbell' onChange={handleInputChange} value={input} type='text' />
      </label>
      <button type='submit'>Submit</button>
     </form>
     <div className='category-list'>
     {
       chessData.map(category => (<Category category={category} />))
      }
      </div>
    </div>
  )
}

export default App
