import React from 'react'
import './searchComponent.css'

const SearchComponent=()=> {
  return (
    <div>
        <h1>
            Search Your Topic
        </h1>
        <div className='search-main'>
        <input type='search'></input>
        </div>
    </div>
  )
}

export default SearchComponent