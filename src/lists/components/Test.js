'use strict'

import React from 'react'
import PopupOverlay, { showPopup } from './PopupOverlay'

const Test = () => (
  <div className='list'>
    <button className='btn btn-default' type='button' onClick={showPopup}>
      Overlay Popup
    </button>
    <PopupOverlay>
      <p>
        This is a popup
      </p>
    </PopupOverlay>
  </div>
)

export default Test
