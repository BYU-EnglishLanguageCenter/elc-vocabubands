'use strict'

import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } from 'graphql'

const rowType = new GraphQLObjectType({
  name: 'Row',
  fields: {
    id: { type: GraphQLInt },
    word: { type: GraphQLString },
    support_words: { type: GraphQLString },
    definition: { type: GraphQLString },
    building_words: { type: GraphQLString }
  }
})

const listType = new GraphQLObjectType({
  name: 'List',
  fields: {
    id: { type: GraphQLInt },
    data: { type: new GraphQLList(rowType) }
  }
})

export default listType
