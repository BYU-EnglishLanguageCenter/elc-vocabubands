'use strict'

import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ListRowContainer from '../containers/ListRowContainer'

const ListTable = ({ data }) => {
  const listRows = data.map(row =>
    <ListRowContainer key={row.id} {...row} />
  )
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
        <ReactCSSTransitionGroup component='tbody' transitionName='animation' transitionEnterTimeout={100} transitionLeaveTimeout={1000}>
          {listRows}
        </ReactCSSTransitionGroup>
      </table>
    </div>
  )
}

ListTable.propTypes = {
  data: PropTypes.array.isRequired
}

export default ListTable
