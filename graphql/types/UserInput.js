'use strict'

const graphql = require('graphql')
const GraphQLInputObjectType = graphql.GraphQLInputObjectType
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLString = graphql.GraphQLString

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    level: {
      type: GraphQLString,
      defaultValue: ''
    }
  }
})

module.exports = UserInputType
