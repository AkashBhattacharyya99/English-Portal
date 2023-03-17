import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-bar'>
    <h3><NavLink className='nav-link' exact to='/' style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              fontWeight: isActive ? 'bold' : '',
            })} >Home</NavLink></h3>
    <h3><NavLink className='nav-link' exact to='/about' style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              fontWeight: isActive ? 'bold' : '',
            })}>About</NavLink></h3>
    <h3><NavLink className='nav-link' to='/contactus' exact style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
            fontWeight: isActive ? 'bold' : '',
            })} >Contact Us</NavLink></h3>
    </div>
  )
}

export default Navbar