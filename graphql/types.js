'use strict'

// import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql'

const graphql = require('graphql')
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

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

const ListType = new GraphQLObjectType({
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

const AllListsType = new GraphQLObjectType({
  name: 'AllLists',
  fields: {
    avl: {
      type: new GraphQLList(GraphQLInt)
    },
    preavl: {
      type: new GraphQLList(GraphQLInt)
    }
  }
})

module.exports = {
  ListType: ListType,
  AllListsType: AllListsType
}
