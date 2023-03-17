import React from 'react'
import AsideBar from './asideBar/AsideBar'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home-aside'>
        <AsideBar />
      </div>
      <div className='home-contant'>
        <h2>Wellcome To Home Page</h2>
      </div>
      <div className='home-right-aside'>
        <AsideBar />
      </div>
    </div>
  )
}

export default Home