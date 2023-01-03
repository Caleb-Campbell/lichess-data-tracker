import React from 'react'

function Category({category}) {
  return (
    <div className='category'>
        <h2>{category.name}</h2>
        {/* <p>{category.points[1]} - {category.points[2]} - {category.points[0]}</p> */}
        <strong className='elo'>ELO: {category.points.map(item => <p>{item[3]}</p>)}</strong>
    </div>
  )
}

export default Category