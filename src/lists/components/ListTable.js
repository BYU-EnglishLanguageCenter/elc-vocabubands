'use strict'

import React, { PropTypes } from 'react'
import ListRowContainer from '../containers/ListRowContainer'

const ListTable = ({ changes, data }) => {
  const listRows = data.map(row => {
    if (changes[0] !== row.id) {
      return <ListRowContainer key={row.id} {...row} />
    } else {
      changes.shift()
    }
  })

  return (
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
  )
}

ListTable.propTypes = {
  changes: PropTypes.array,
  data: PropTypes.array.isRequired
}

export default ListTable
