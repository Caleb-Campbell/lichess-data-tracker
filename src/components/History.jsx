import React from 'react'
import axios from 'axios'
import Category from './Category'


function History({chessData, input, setInput, setChessData}) {

    const handleSubmit = (e) => {
        e.preventDefault() 
        input === '' ? setInput('SopwithCampbell') : setInput(input)
        getData(input)
      }
    
   

      const handleInputChange = (e) => {
        setInput(e.target.value)
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


  return (
    <div>

    <h1>{input}</h1>
     <form onSubmit={handleSubmit}>
      <label className='label'>View ELO History: <br/>
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

export default History