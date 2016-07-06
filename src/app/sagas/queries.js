'use strict'

import { graphql } from 'graphql'
import schema from '../graphql/schema'

export const getData = (id) => {
  const query = `
    query {
      list(id: ${id}) {
        data {
          ...RowData
        }
      }
    }

    fragment RowData on Row {
      id
      word
      support_words
      definition
      building_words
    }
  `

  return graphql(schema, query)
}

export const getLists = () => {
  const query = `
    query {
      allLists {
        avl
      }
    }
  `

  return graphql(schema, query)
}
