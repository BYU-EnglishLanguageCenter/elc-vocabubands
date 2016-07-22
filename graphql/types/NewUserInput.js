'use strict'

const graphql = require('graphql')
const GraphQLInputObjectType = graphql.GraphQLInputObjectType
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLString = graphql.GraphQLString

const NewUserInputType = new GraphQLInputObjectType({
  name: 'NewUserInput',
  fields: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    net_id: {
      type: GraphQLString
    },
    level: {
      type: GraphQLString,
      defaultValue: 'none'
    },
    type: {
      type: GraphQLString
    }
  }
})

module.exports = NewUserInputType
