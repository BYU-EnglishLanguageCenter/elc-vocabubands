'use strict'

import React from 'react'

const $ = (id) => {
  return document.getElementById(id)
}

export const hidePopup = () => {
  $('popup').style.display = 'none'
}

export const showPopup = () => {
  $('popup').style.display = 'block'
  $('popup-contents').focus()
}

const PopupOverlay = ({ children }) => {
  return (
    <div className='popup' id='popup'>
      <div className='popup-contents' id='popup-contents' tabIndex='-1' onBlur={hidePopup}>
        <a className='popup-exit' href='#' onClick={hidePopup}>
          <span className='glyphicon glyphicon-remove pull-right' aria-hidden='true' />
        </a>
        <div className='popup-children'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PopupOverlay
