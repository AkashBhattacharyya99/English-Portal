import React from 'react'
import AsideBar from '../asideBar/AsideBar'
import './home.css'
import SearchComponent from './SearchComponent'

function Home() {
  return (
    <div className='home'>
      {/* <div className='home-aside'>
        <AsideBar />
      </div> */}
      <div className='home-contant'>
        <SearchComponent/>
      </div>
      <div className='home-right-aside'>
        <AsideBar />
      </div>
    </div>
  )
}

export default Home