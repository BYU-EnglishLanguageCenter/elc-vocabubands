'use strict'

const mongoose = require('mongoose')
const graphql = require('graphql')
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

// graphql types
const AllListsType = require('./AllLists')
const ListType = require('./List')
const UserType = require('./User')

// mongodb models
const AllListsModel = require('../../models/AllLists')
const ListModel = require('../../models/List')
const UserModel = require('../../models/User')

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
      resolve: (parent, { type }) => {
        return AllListsModel.findOne({type: type})
      }
    },

    list: {
      type: ListType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (parent, { id }) => ListModel.findOne({id: id})
    },

    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: (parent, { id }, session) => {
        if (session.isAdmin) {
          id = mongoose.Types.ObjectId(id)
          return UserModel.findOne({_id: id})
        } else {
          return null
        }
      }
    }
  }
})

module.exports = Query
