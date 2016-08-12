'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Row = ({ word, support_words, definition, building_words, buildingWordsChange, definitionChange, supportWordsChange, wordChange }) => (
  <tr>
    <td>
      <input type='text' className='form-control' value={word} onChange={wordChange} />
    </td>
    <td>
      <textarea type='text' rows='3' className='form-control' value={support_words} onChange={supportWordsChange} />
    </td>
    <td>
      <textarea type='text' rows='3' className='form-control' value={definition} onChange={definitionChange} />
    </td>
    <td>
      <textarea type='text' rows='3' className='form-control' value={building_words} onChange={buildingWordsChange} />
    </td>
  </tr>
)

const ListEdit = ({ id, data, type, buildingWordsChange, definitionChange, save, supportWordsChange, wordChange }) => {
  let listType

  switch (type) {
    case 'avl':
      listType = 'AVL'
      break
    case 'preavl':
      listType = 'Pre-AVL'
      break
    default:
      listType = ''
  }

  const listRows = data.map(row => {
    const handleBuildingWordsChange = (e) => {
      buildingWordsChange(row.id - 1, e.target.value)
    }

    const handleDefinitionChange = (e) => {
      definitionChange(row.id - 1, e.target.value)
    }

    const handleSupportWordsChange = (e) => {
      supportWordsChange(row.id - 1, e.target.value)
    }

    const handleWordChange = (e) => {
      wordChange(row.id - 1, e.target.value)
    }

    return <Row {...row}
             buildingWordsChange={handleBuildingWordsChange}
             definitionChange={handleDefinitionChange}
             supportWordsChange={handleSupportWordsChange}
             wordChange={handleWordChange}
             key={row.id}
           />
  })

  return (
    <div className='list'>
      <h1 className='inline'>
        {listType} List {id}
      </h1>
      <Link to={'/lists/edit'} className='btn btn-primary pull-right'role='button'>
        Back
      </Link>
      <div className='listTable'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Word</th>
              <th>Support Words</th>
              <th>Definition</th>
              <th>Building Words</th>
            </tr>
          </thead>
          <tbody>
            {listRows}
          </tbody>
        </table>
      </div>

      <button className='btn btn-success' role='button' onClick={save}>
        Save Changes
      </button>
      <Link to={'/lists/edit'} className='btn btn-primary pull-right' role='button'>
        Back
      </Link>
    </div>
  )
}

ListEdit.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default ListEdit
