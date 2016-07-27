'use strict'

const graphql = require('graphql')
const GraphQLInputObjectType = graphql.GraphQLInputObjectType
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLString = graphql.GraphQLString

const ChangesInputType = new GraphQLInputObjectType({
  name: 'ChangesInput',
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

module.exports = ChangesInputType
