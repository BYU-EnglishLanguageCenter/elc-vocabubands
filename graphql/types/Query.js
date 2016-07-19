'use strict'

const graphql = require('graphql')
const GraphQLInt = graphql.GraphQLInt
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString
const AllListsModel = require('../../models/AllLists')
const AllListsType = require('./AllLists')
const ListModel = require('../../models/List')
const ListType = require('./List')

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    allLists: {
      type: AllListsType,
      args: {
        type: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (parent, { type }) => AllListsModel.findOne({type: type})
    },

    list: {
      type: ListType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (parent, { id }) => ListModel.findOne({id: id})
    }
  }
})

module.exports = Query
