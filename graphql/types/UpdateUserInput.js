'use strict'

const graphql = require('graphql')
const GraphQLID = graphql.GraphQLID
const GraphQLInputObjectType = graphql.GraphQLInputObjectType
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLString = graphql.GraphQLString

const UpdateUserInputType = new GraphQLInputObjectType({
  name: 'UpdateUserInput',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    net_id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    level: {
      type: GraphQLString,
      defaultValue: ''
    },
    type: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})

module.exports = UpdateUserInputType
