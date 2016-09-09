'use strict'

import React from 'react'
import { $ } from '../../../resources/js/util.js'

export const hidePopup = () => {
  $('popup').style.display = 'none'
}

export const showPopup = () => {
  $('popup').style.display = 'block'
  // $('popup').style.opacity = 1
  fadeIn(1)
  // $('popup-contents').focus()
}

const fadeIn = (val) => {
  // console.log(val)
  // val += 0.1
  // val = Number(val.toFixed(1))

  $('popup').style.opacity = '0.' + val
  val++

  if (val <= 9) {
    setTimeout(() => { fadeIn(val) }, 0)
  }
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
    <div className='popup' id='popup'>
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
