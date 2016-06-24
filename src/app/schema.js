'use strict'

import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'
import listType from './types'
import data from './data'

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      list: {
        type: listType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => Promise.resolve(5)
      },
      hi: {
        type: GraphQLString,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => Promise.resolve('hi there friend')
      }
    }
  })
})

export default schema
