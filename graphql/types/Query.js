'use strict'

// dependencies
const graphql = require('graphql')
const GraphQLID = graphql.GraphQLID
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

// graphql types
const AllListsType = require('./AllLists')
const ListChangesType = require('./ListChanges')
const ListType = require('./List')
const UserType = require('./User')

// mongodb models
const AllListsModel = require('../../models/AllLists')
const ListChangesModel = require('../../models/ListChanges')
const ListModel = require('../../models/List')
const UserModel = require('../../models/User')

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    allLists: {
      type: new GraphQLList(AllListsType),
      resolve: (parent, args, session) => AllListsModel.find({})
    },

    listChanges: {
      type: ListChangesType,
      args: {
        list_id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        list_type: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (parent, { list_id, list_type }, session) => ListChangesModel.findOne({list_id: list_id, list_type, net_id: session.user})
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
          type: GraphQLID
        }
      },
      resolve: (parent, { id }, session) =>
        UserModel.findOne({_id: id}).then(user => {
          if (session.isAdmin || session.user === user.net_id) {
            return user
          } else {
            return null
          }
        }).catch(err => {
          console.log(err)
          return null
        })

      //   console.log(session.user)
      //   console.log(user.net_id)
      //   if (session.isAdmin || session.user === user.net_id) {
      //     return user
      //   } else {
      //     return null
      //   }

    },

    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args, session) => {
        if (session.isAdmin) {
          return UserModel.find({})
        } else {
          return null
        }
      }
    }
  }
})

module.exports = Query
