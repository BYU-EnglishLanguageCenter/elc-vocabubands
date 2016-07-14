'use strict'

const GraphQLSchema = require('graphql').GraphQLSchema
const Mutation = require('./types/Mutation')
const Query = require('./types/Query')

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
