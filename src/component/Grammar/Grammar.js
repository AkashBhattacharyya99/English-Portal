import React from 'react'
import AsideBar from '../asideBar/AsideBar'
import './grammar.css'

function Grammar() {
  return (
    <div className='Grammar'>
    <div className='Grammar-leftAside'><AsideBar/></div>
    <div className='Grammar-content'></div>
    <div className='Grammar-rightAside'><AsideBar/></div>
    </div>
  )
}

export default Grammar