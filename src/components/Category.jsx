import React, {useState} from 'react'
import '../styles/category.css'

function Category({category}) {
    let previous = 0
    let fontColor = 'white'
  return (
    <div className='category'>
        <h2>{category.name}</h2>
        {/* <p>{category.points[1]} - {category.points[2]} - {category.points[0]}</p> */}
        <strong className='elotitle'>ELO: {category.points.map(item => {
                item[3] > previous ? fontColor = 'green' : fontColor = 'red'
                previous = item[3]
            return (
        <div className='timebox'>
        <p className='date'>{item[1]} - {item[2]}  - {item[0]}</p>
        <p style={{color: fontColor}} className='elo'>{item[3]} {fontColor === 'green' ? '▲' : '▼'}</p>
        </div>
        
        )})}</strong>
    </div>
  )
}

export default Category