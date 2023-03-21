import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <div className='nav-bar'>
      <h3><NavLink className='nav-link' exact to='/' style={({ isActive }) => ({
        color: isActive ? '#6B00DD' : 'black',
        fontWeight: isActive ? 'bold' : '',
      })} >Home</NavLink></h3>
      <h3><NavLink className='nav-link' exact to='/grammar' style={({ isActive }) => ({
        color: isActive ? '#6B00DD' : 'black',
        fontWeight: isActive ? 'bold' : '',
      })}>Grammar</NavLink></h3>
      <h3><NavLink className='nav-link' to='/vocabulary' exact style={({ isActive }) => ({
        color: isActive ? '#6B00DD' : 'black',
        fontWeight: isActive ? 'bold' : '',
      })} >Vocabulary</NavLink></h3>
      <h3><NavLink className='nav-link' to='/exercises' exact style={({ isActive }) => ({
        color: isActive ? '#6B00DD' : 'black',
        fontWeight: isActive ? 'bold' : '',
      })} >Exercises</NavLink></h3>
    </div>
  )
}

export default Navbar