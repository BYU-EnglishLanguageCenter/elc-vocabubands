'use strict'

import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLNonNull } from 'graphql'
import { ListType, AllListsType } from './types'
import data from './data'

let count = 0

var QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    list: {
      type: ListType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (parent, { id }) => data[id]
    },

    allLists: {
      type: AllListsType,
      resolve: (parent, args) => data['lists']
    }
  }
})

var MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    update: {
      type: GraphQLInt,
      resolve: (root, args) => count + 1
    }
  }
})

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})
