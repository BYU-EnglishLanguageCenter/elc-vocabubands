'use strict'

import React from 'react'

const $ = (id) => {
  return document.getElementById(id)
}

const hide = () => {
  $('popup').style.display = 'none'
}

export const showPopup = () => {
  $('popup').style.display = 'block'
  $('popup-contents').focus()
}

const PopupOverlay = ({ children }) => {
  return (
    <div className='popup' id='popup'>
      <div className='popup-contents' id='popup-contents' tabIndex='-1' onBlur={hide}>
        <a className='popup-exit' href='#' onClick={hide}>
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
