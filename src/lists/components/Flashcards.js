'use strict'

import React from 'react'
import { $ } from '../../../resources/js/util'

const leftToRight = () => {
  $('left').style.transition = 'opacity 1s, transform 1s'
  $('left').classList.add('slide-origin')
  $('middle').style.transition = 'opacity 1s, transform 1s'
  $('middle').classList.add('slide-right')

  setTimeout(() => {
    $('middle-text').innerHTML = $('left-text').innerHTML
    $('left').style.transition = 'transform 0s'
    $('left').classList.remove('slide-origin')
    $('middle').style.transition = 'transform 0s'
    $('middle').classList.remove('slide-right')
  }, 1000)
}

const rightToLeft = () => {
  $('right').style.transition = 'opacity 1s, transform 1s'
  $('right').classList.add('slide-origin')
  $('middle').style.transition = 'opacity 1s, transform 1s'
  $('middle').classList.add('slide-left')

  setTimeout(() => {
    $('middle-text').innerHTML = $('right-text').innerHTML
    $('right').style.transition = 'transform 0s'
    $('right').classList.remove('slide-origin')
    $('middle').style.transition = 'transform 0s'
    $('middle').classList.remove('slide-left')
  }, 1000)
}

const flip = () => {
  $('middle').style.transition = 'transform 1s'
  $('middle').classList.toggle('flipped')
}

const Flashcards = () => (
  <div className='flashcards'>
    <div className='flashcard'>
    </div>

    <div className='buttons align-center'>
      <div className='btn-group' role='group' aria-label='...'>
        <button className='btn btn-default' type='button'>
          Prev
        </button>
        <button className='btn btn-default' type='button'>
          Flip
        </button>
        <button className='btn btn-default' type='button'>
          Next
        </button>
      </div>
    </div>

    <section className='fcontainer'>
      <div id='card2'>
        <figure className='front align-center'>
          <h1>1</h1>
        </figure>
        <figure className='back align-center'>
          <h1>2</h1>
        </figure>
      </div>
    </section>

    <button className='btn btn-default' style={{'marginTop': '50px'}} onClick={() => { $('card2').classList.toggle('flipped') }}>
      Flip
    </button>

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
            this is on the middle card
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

    <button className='btn btn-default' style={{'marginTop': '50px'}} onClick={leftToRight}>
      Prev
    </button>
    <button className='btn btn-default' style={{'marginTop': '50px'}} onClick={flip}>
      Flip
    </button>
    <button className='btn btn-default' style={{'marginTop': '50px'}} onClick={rightToLeft}>
      Next
    </button>
  </div>
)

export default Flashcards
