'use strict'

import React from 'react'
import vex from 'vex-js'
import dialogPolyfill from 'dialog-polyfill'
import { $ } from '../../../resources/js/util'
import PopupOverlay, { showPopup } from '../../common/components/PopupOverlay'

vex.registerPlugin(require('vex-dialog'))
vex.defaultOptions.className = 'vex-theme-default'

const start = () => {
  vex.open('hello')
}

const a = () => {
  const dialog = $('d')
  dialogPolyfill.registerDialog(dialog)
  dialog.showModal()
}

const close = () => {
  $('d').close()
}

const Test = () => (
  <div className='list'>
    <button className='btn btn-default show-popup' type='button' onClick={showPopup}>
      Overlay Popup
    </button>
    <PopupOverlay>
      <p>
        hello
      </p>
    </PopupOverlay>
    <dialog className='modal' id='d'>
      hi
      <br /><br />
      <button className='btn btn-default' onClick={close}>
        Close
      </button>
    </dialog>
    <br /><br />
    <button className='btn btn-primary' onClick={a}>
      Show Dialog
    </button>
    <br /><br />
    <button className='btn btn-success' onClick={start}>
      Vex overlay
    </button>
  </div>
)

export default Test
