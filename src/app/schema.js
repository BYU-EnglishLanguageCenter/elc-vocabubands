'use strict'

import { GraphQLSchema, GraphQLObjectType, GraphQLInt } from 'graphql'
import listType from './types'
import data from './data'

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      list: {
        type: listType,
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve: (root, args) => data[args.id]
      }
    }
  })
})

export default schema
