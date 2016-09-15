'use strict'

import React, { PropTypes } from 'react'

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

    <button className='btn btn-default' style={{'margin-top': '50px'}} onClick={() => { document.getElementById('card').classList.toggle('flipped') }}>
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

    <button className='btn btn-default' style={{'margin-top': '50px'}} onClick={() => { document.getElementById('card2').classList.toggle('flipped') }}>
      Flip
    </button>
  </div>
)

export default Flashcards
