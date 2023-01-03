import React, {useState} from 'react'
import '../styles/category.css'

function Category({category}) {
    let previous = 0
    let fontColor = 'white'

    const [openCategories, setOpenCategories] = useState({
        Bullet: true,
        Blitz: false, 
        Rapid: false
    })

    const openCategory = (e) => {
      if(e.target.id === 'Bullet'){
        setOpenCategories({...openCategories, Bullet: !openCategories.Bullet })}   
    }

    const styleObj = {
    transform: openCategories[category.name] ? 'transform: rotateZ(180deg)' : 'transform: rotateZ(0deg)'
    }

  return (
    <div key={category.points} className='category'>
      <div className='category-header'>
        <h2 onClick={openCategory} id={category.name}>{category.name} </h2>
        <p style={styleObj} className='caret'>▲</p>
      </div>

                <strong key={category.points} className='elotitle'>ELO: {category.points.map(item => {
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