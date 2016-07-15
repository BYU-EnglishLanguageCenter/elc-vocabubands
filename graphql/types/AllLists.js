'use strict'

const graphql = require('graphql')
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

const AllLists = new GraphQLObjectType({
  name: 'AllLists',
  fields: {
    type: {
      type: GraphQLString
    },
    list_ids: {
      type: new GraphQLList(GraphQLInt)
    }
  }
})

module.exports = AllLists
