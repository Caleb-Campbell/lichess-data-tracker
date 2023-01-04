import React, {useState} from 'react'
import Nav from './Nav'
import Category from './Category'
import History from './History'
import logo from '../assets/chessLogo.png'
import { useNavigate } from 'react-router'




export default function Home({input, setInput, getData}) {


    const navigate = useNavigate()




  return (
    <div>
      <img className='logo' src={logo} />
      <h1>Chet Chess Analysis</h1>


    </div>
  )
}
