'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ListTableContainer from '../containers/ListTableContainer'

const List = ({ id, save, showSaveChanges, type }) => {
  let saveChanges = ''

  if (showSaveChanges) {
    saveChanges =
      <button className='btn btn-primary pull-right' type='button' onClick={save}>
        Save Changes
      </button>
  }

  return (
    <div className='list'>
      <h1>
        List {id}
      </h1>
      <ListTableContainer />
      <Link to={`/lists/${type}`} className='btn btn-primary'role='button'>
        See all Lists
      </Link>
      {saveChanges}
    </div>
  )
}

List.propTypes = {
  id: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
  showSaveChanges: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
}

export default List
