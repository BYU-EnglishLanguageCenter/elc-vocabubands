'use strict'

import React, { PropTypes } from 'react'
import ListRowContainer from '../containers/ListRowContainer'

const ListTable = ({data}) => (
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
        {data.map(row =>
          <ListRowContainer key={row.id} {...row} />
        )}
      </tbody>
    </table>
  </div>
)

ListTable.propTypes = {
  data: PropTypes.array.isRequired
}

export default ListTable
