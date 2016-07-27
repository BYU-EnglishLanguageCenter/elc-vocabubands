'use strict'

const graphql = require('graphql')
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

const ChangesType = new GraphQLObjectType({
  name: 'Changes',
  fields: {
    list_id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    list_type: {
      type: new GraphQLNonNull(GraphQLString)
    },
    rows: {
      type: new GraphQLList(GraphQLInt)
    }
  }
})

module.exports = ChangesType
