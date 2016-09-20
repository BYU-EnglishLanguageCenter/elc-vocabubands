'use strict'

import React from 'react'
import { $ } from '../../../resources/js/util'

const slide1 = () => {
  $('card3').classList.toggle('slide-left')
  $('card4').classList.toggle('slide-origin')
  setTimeout(() => { $('card3').classList.toggle('slide-left'); $('card3').classList.toggle('right'); console.log('here') }, 1000)
}

const slide2 = () => {
  // $('card3').classList.remove('slide-left')
  // // $('card3').classList.add('right')
  // $('card3').style.transition = 'transfrom 0s'
  // $('card3').style.transform = 'translateX(100%) rotateY(-60deg)'
  // $('card3').style.opacity = 1

  $('card4').classList.remove('slide-origin')
  $('card4').classList.add('slide-left')

  $('card3').classList.toggle('right')
  // $('card3').classList.add('slide-origin')
}

const slide3 = () => {
  $('left').style.transition = 'transform 1s'
  $('left').classList.add('slide-origin')
  setTimeout(() => { $('left').style.transition = 'transform 0s'; $('left').classList.remove('slide-origin') }, 1000)
}

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
      <div id='card'>
        <figure className='front align-center'>
          <h1>1</h1>
        </figure>
        <figure className='back align-center'>
          <h1>2</h1>
        </figure>
      </div>
    </section>

    <button className='btn btn-default' style={{'margin-top': '50px'}} onClick={() => { $('card').classList.toggle('flipped') }}>
      Flip
    </button>

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

    <button className='btn btn-default' style={{'margin-top': '50px'}} onClick={() => { $('card2').classList.toggle('flipped') }}>
      Flip
    </button>

    <section className='fcontainer'>
      <div id='card3'>
        <figure className='front align-center'>
          <h1>1</h1>
        </figure>
        <figure className='back align-center'>
          <h1>2</h1>
        </figure>
      </div>
      <div id='card4'>
        <figure className='front align-center'>
          <h1>2</h1>
        </figure>
        <figure className='back align-center'>
          <h1>2</h1>
        </figure>
      </div>
    </section>

    <button className='btn btn-default' style={{'margin-top': '50px'}} onClick={slide1}>
      Slide1
    </button>
    <button className='btn btn-default' style={{'margin-top': '50px'}} onClick={slide2}>
      Slide2
    </button>

    <section className='fcontainer'>
      <div id='left'>
        <figure className='front align-center'>
          <h1>left</h1>
          <p id='left-text'>
            this is coming in from the left card
          </p>
        </figure>
        <figure className='back align-center'>
          <h1>2</h1>
        </figure>
      </div>
      <div id='middle'>
        <figure className='front align-center'>
          <h1>middle</h1>
          <p id='middle-text'>
            this is on the middle card
          </p>
        </figure>
        <figure className='back align-center'>
          <h1>2</h1>
        </figure>
      </div>
      <div id='right'>
        <figure className='front align-center'>
          <h1>right</h1>
          <p id='right-text'>
            this is coming in from the right card
          </p>
        </figure>
        <figure className='back align-center'>
          <h1>2</h1>
        </figure>
      </div>
    </section>

    <button className='btn btn-default' style={{'margin-top': '50px'}} onClick={leftToRight}>
      Left to Right
    </button>
    <button className='btn btn-default' style={{'margin-top': '50px'}} onClick={rightToLeft}>
      Right to Left
    </button>
  </div>
)

export default Flashcards
