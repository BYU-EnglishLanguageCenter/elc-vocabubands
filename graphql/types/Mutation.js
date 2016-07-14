'use strict'

const graphql = require('graphql')
const GraphQLInt = graphql.GraphQLInt
const GraphQLObjectType = graphql.GraphQLObjectType

let count = 0

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    update: {
      type: GraphQLInt,
      resolve: (root, args) => count + 1
    }
  }
})

module.exports = Mutation
