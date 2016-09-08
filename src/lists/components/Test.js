'use strict'

import React from 'react'
import vex from 'vex-js'
import dialogPolyfill from 'dialog-polyfill'
import PopupOverlay, { showPopup } from '../../common/components/PopupOverlay'

vex.registerPlugin(require('vex-dialog'))
vex.defaultOptions.className = 'vex-theme-default'

const start = () => {
  vex.open('hello')
}

const a = () => {
  const dialog = document.getElementById('d')
  dialogPolyfill.registerDialog(dialog)
  dialog.showModal()
}

const Test = () => (
  <div className='list'>
    <button className='btn btn-default' type='button' onClick={showPopup}>
      Overlay Popup
    </button>
    <PopupOverlay>
      <p>
        <button className='btn btn-success' onClick={start}>
          Start
        </button>
      </p>
    </PopupOverlay>
    <dialog className='modal' id='d'>hi</dialog>
    <br /><br />
    <button className='btn btn-primary' onClick={a}>
      Show Dialog
    </button>
  </div>
)

export default Test
