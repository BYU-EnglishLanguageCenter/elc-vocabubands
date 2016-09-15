'use strict'

import React from 'react'
import { $ } from '../../../resources/js/util.js'

export const hidePopup = () => {
  $('popup').classList.remove('popup')
  $('popup').classList.add('popup-hidden')
}

export const showPopup = () => {
  $('popup').classList.remove('popup-hidden')
  $('popup').classList.add('popup')
}

const PopupOverlay = ({ children }) => {
  // hide popup if esc key is pressed
  document.onkeyup = (e) => {
    e = e || window.event
    if (e.keyCode === 27) {
      hidePopup()
    }
  }

  return (
    <div className='popup-hidden' id='popup'>
      <div className='popup-contents' id='popup-contents'>
        <button className='btn btn-default pull-right' style={{'border': 'none', 'outline': 'none'}} onClick={hidePopup}>
          <span className='glyphicon glyphicon-remove' aria-hidden='true' />
        </button>
        <div className='popup-children'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PopupOverlay

// <a className='popup-exit' href='javascript:void(0)' onClick={hidePopup}>
//   <span className='glyphicon glyphicon-remove pull-right' aria-hidden='true' />
// </a>
