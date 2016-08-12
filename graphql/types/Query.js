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

const QueryType = new GraphQLObjectType({
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
      resolve: (parent, { list_id, list_type }, session) => ListChangesModel.findOne({list_id, list_type, net_id: session.user})
    },

    list: {
      type: ListType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        type: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (parent, { id, type }, session) => ListModel.findOne({id, type})
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
          }

          return null
        }).catch(err => {
          console.log(err)
          return null
        })
    },

    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args, session) =>
        UserModel.find({}).then(users => {
          if (session.isAdmin) {
            return users
          }

          return null
        }).catch(err => {
          console.log(err)
          return null
        })
    },

    test: {
      type: ListType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        type: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, { id, type }, session) =>
        ListModel.findOneAndUpdate({id, type}, {$set: { type: 'avl' }}, { new: true })
    }
  }
})

module.exports = QueryType

// new GraphQLObjectType({
//   name: 'r',
//   fields: {
//     ok: {
//       type: GraphQLInt
//     },
//     nModified: {
//       type: GraphQLInt
//     },
//     n: {
//       type: GraphQLInt
//     }
//   }
// })
