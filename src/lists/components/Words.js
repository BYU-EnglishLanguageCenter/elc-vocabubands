'use strict'

import React from 'react'

const $ = (id) => {
  return document.getElementById(id)
}

const hide = () => {
  $('some-id').parentNode.style.display = 'none'
}

const show = () => {
  $('some-id').parentNode.style.display = 'block'
  $('some-id').focus()
  // $('some-id').addEventListener('blur', (e) => {
  //   console.log('blur')
  // })
}

const Words = () => (
  <div className='list'>
    <button className='btn btn-default' type='button' onClick={show}>
      Overlay Popup
    </button>
    <div className='popup'>
      <div className='popup-contents' id='some-id' tabIndex='-1' onBlur={hide}>
        <p>
          This is a popup! Check it out!
        </p>
        <button className='btn btn-default' type='button' onClick={hide}>
          Done
        </button>
      </div>
    </div>
  </div>
)

export default Words
