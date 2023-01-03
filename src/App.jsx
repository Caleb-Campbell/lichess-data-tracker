import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

import Category from './components/Category'

function App() {
  const [input, setInput] = useState('')
  const [chessData, setChessData] = useState([])

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
      <h1>{input}</h1>
     <form onSubmit={handleSubmit}>
      <label className='label'>Enter your lichess Username <br/>
        <input placeholder='SopwithCampbell' onChange={handleInputChange} value={input} type='text' />
      </label>
      <button type='submit'>Submit</button>
     </form>
     {
      chessData.map(category => (<Category category={category} />))
     }
    </div>
  )
}

export default App
