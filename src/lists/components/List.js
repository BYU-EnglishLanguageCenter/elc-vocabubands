'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import ListTableContainer from '../containers/ListTableContainer'

const List = ({ id, save, showSaveChanges, toggleData, type, undoChanges, whatToShow }) => {
  let saveChanges = ''

  if (showSaveChanges) {
    saveChanges =
      <button className='btn btn-primary pull-right' type='button' onClick={save}>
        Save Changes
      </button>
  }

  return (
    <div className='list'>
      <h1 className='inline'>
        List {id}
      </h1>
      <div className='pull-right inline'>
        <DropdownButton title='More Options' bsStyle='default' id='options' type='button' pullRight>
          <MenuItem onClick={toggleData}>
            {whatToShow}
          </MenuItem>
          <MenuItem onClick={undoChanges}>
            Undo All Changes
          </MenuItem>
        </DropdownButton>
      </div>
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
  toggleData: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  undoChanges: PropTypes.func.isRequired,
  whatToShow: PropTypes.string.isRequired
}

export default List
