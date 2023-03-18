import React from 'react'
import './preview.css'

function Preview(props) {
  return (
    <div id={props.id} className='preview'>
  <div className='card1'>
        <h2>Tenses</h2>
        <p>lorem ipsum kdsns</p>
  </div>
  <div className='card2'>
    <div></div>
    <div className='contant'>
      <h2>Example</h2>
      <p>lorem ipsum kdsnjds</p>
      <button className='btn btn-primary'>Learn More &gt;</button>
      </div>
  </div>
    </div>
  )
}

export default Preview