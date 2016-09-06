'use strict'

const graphql = require('graphql')
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

const AllListsType = new GraphQLObjectType({
  name: 'AllLists',
  fields: {
    type: {
      type: GraphQLString,
      description: 'List type, e.g. avl, pre-avl'
    },
    list_ids: {
      type: new GraphQLList(GraphQLInt),
      description: 'All of the list ids that have the given list type'
    }
  }
})

module.exports = AllListsType
