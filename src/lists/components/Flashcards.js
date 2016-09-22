'use strict'

import React from 'react'
import { $ } from '../../../resources/js/util'

let animationStatus = 'SET'

const prev = () => {
  if (animationStatus === 'ACTIVE') {
    return
  }

  animationStatus = 'ACTIVE'
  $('left').style.transition = 'opacity .75s, transform .75s'
  $('left').classList.add('slide-origin')
  $('middle').style.transition = 'opacity .75s, transform .75s'
  $('middle').classList.add('slide-right')

  setTimeout(() => {
    $('middle-text').innerHTML = $('left-text').innerHTML
    $('left').style.transition = 'transform 0s'
    $('left').classList.remove('slide-origin')
    $('middle').style.transition = 'transform 0s'
    $('middle').classList.remove('flipped')
    $('middle').classList.remove('slide-right')
    animationStatus = 'SET'
  }, 750)
}

const next = () => {
  if (animationStatus === 'ACTIVE') {
    return
  }

  animationStatus = 'ACTIVE'
  $('right').style.transition = 'opacity .75s, transform .75s'
  $('right').classList.add('slide-origin')
  $('middle').style.transition = 'opacity .75s, transform .75s'
  $('middle').classList.add('slide-left')

  setTimeout(() => {
    $('middle-text').innerHTML = $('right-text').innerHTML
    $('right').style.transition = 'transform 0s'
    $('right').classList.remove('slide-origin')
    $('middle').style.transition = 'transform 0s'
    $('middle').classList.remove('flipped')
    $('middle').classList.remove('slide-left')
    animationStatus = 'SET'
  }, 750)
}

const flip = () => {
  if (animationStatus === 'ACTIVE') {
    return
  }

  $('middle').style.transition = 'transform 1s'
  $('middle').classList.toggle('flipped')
}

const Flashcards = ({ data }) => (
  <div className='flashcards'>
    <section className='flashcard-container'>
      <div className='flashcard' id='left'>
        <div className='front align-center'>
          <h1>left</h1>
          <p id='left-text'>
            this is coming in from the left card
          </p>
        </div>
        <div className='back align-center'>
          <h1>2</h1>
        </div>
      </div>

      <div className='flashcard' id='middle'>
        <div className='front align-center'>
          <h1>middle</h1>
          <p id='middle-text'>
            {data.length > 0 ? data[0].word : ''}
          </p>
        </div>
        <div className='back align-center'>
          <h1>2</h1>
        </div>
      </div>

      <div className='flashcard' id='right'>
        <div className='front align-center'>
          <h1>right</h1>
          <p id='right-text'>
            this is coming in from the right card
          </p>
        </div>
        <div className='back align-center'>
          <h1>2</h1>
        </div>
      </div>
    </section>

    <div className='buttons align-center'>
      <div className='btn-group' role='group' aria-label='...'>
        <button className='btn btn-default' id='btn-prev' type='button' onClick={prev}>
          Prev
        </button>
        <button className='btn btn-default' id='btn-flip' type='button' onClick={flip}>
          Flip
        </button>
        <button className='btn btn-default' id='btn-next' type='button' onClick={next}>
          Next
        </button>
      </div>
    </div>
  </div>
)

export default Flashcards
