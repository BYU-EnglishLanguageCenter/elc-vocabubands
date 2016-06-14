'use strict'

import React, { PropTypes } from 'react'

const ListRow = ({ id, word, support_words, definition, building_words, done, onClick }) => {
  const rowClass = done ? 'row-done' : 'row-normal'
  const butnClass = done ? 'butn-undo' : 'butn-done'
  const butnText = done ? 'Undo' : 'Done'

  return (
    <tr className={rowClass} id={'row' + id}>
      <td>{word}</td>
      <td>{support_words}</td>
      <td>{definition}</td>
      <td>{building_words}</td>
      <td className='butn-cell-no-style'>
        <button className={butnClass} onClick={onClick} >
          {butnText}
        </button>
      </td>
    </tr>
  )
}

ListRow.propTypes = {
  id: PropTypes.number,
  word: PropTypes.string,
  support_words: PropTypes.string,
  definition: PropTypes.string,
  building_words: PropTypes.string,
  done: PropTypes.bool,
  onClick: PropTypes.func
}

export default ListRow
