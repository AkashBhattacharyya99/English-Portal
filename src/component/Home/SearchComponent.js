import React from 'react'
import './searchComponent.css'
import search from '../../image/search-icon.png'

const SearchComponent = () => {
  return (
    <div className='search-component'>
      <h1>
        Search Your Topic
      </h1>
      <h4>
        With the world's largest web developer site.
      </h4>
      <div className='search-main'>
        <input type='search' placeholder='e.g. Tense'></input>
        <button><img src={search} height='15' width='15' /></button>
      </div>
      <div className='lower-sec'>
      <div className='ocean'>
        <div className='wave'>

        </div>
      </div>
      </div>
    </div>
  )
}

export default SearchComponent