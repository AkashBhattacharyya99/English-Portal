import React from 'react'
import AsideBar from '../asideBar/AsideBar'
import Footer from '../footer/Footer'
import './home.css'
import SearchComponent from './SearchComponent'

function Home() {
  return (
    <div>
    <div className='home'>
      {/* <div className='home-aside'>
        <AsideBar />
      </div> */}
      <div className='home-contant'>
        <SearchComponent/>
      </div>
      <div className='home-right-aside'>
        <AsideBar Advertisement="true"/>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Home