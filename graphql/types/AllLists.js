'use strict'

const graphql = require('graphql')
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLObjectType = graphql.GraphQLObjectType

const AllLists = new GraphQLObjectType({
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

module.exports = AllLists
