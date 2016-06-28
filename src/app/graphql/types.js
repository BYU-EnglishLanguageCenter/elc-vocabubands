'use strict'

import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql'

const RowType = new GraphQLObjectType({
  name: 'Row',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    word: {
      type: new GraphQLNonNull(GraphQLString)
    },
    support_words: {
      type: GraphQLString
    },
    definition: {
      type: GraphQLString
    },
    building_words: {
      type: GraphQLString
    }
  }
})

export const ListType = new GraphQLObjectType({
  name: 'List',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    data: {
      type: new GraphQLList(RowType)
    }
  }
})

export const AllListsType = new GraphQLObjectType({
  name: 'AllLists',
  fields: {
    avl: {
      type: new GraphQLList(GraphQLInt)
    }
  }
})
