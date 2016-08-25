'use strict'

// dependencies
const graphql = require('graphql')
const GraphQLID = graphql.GraphQLID
const GraphQLInt = graphql.GraphQLInt
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

// graphql types
const ListChangesInputType = require('./ListChangesInput')
const ListChangesType = require('./ListChanges')
const ListInputType = require('./ListInput')
const NewUserInputType = require('./NewUserInput')
const UpdateUserInputType = require('./UpdateUserInput')
const UserType = require('./User')

// mongodb models
const ListChangesModel = require('../../models/ListChanges')
const ListModel = require('../../models/List')
const UserModel = require('../../models/User')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addNewUser: {
      type: UserType,
      args: {
        user: {
          type: new GraphQLNonNull(NewUserInputType)
        }
      },
      resolve: (root, { user }, session) => {
        const newUser = new UserModel({
          first_name: user.first_name,
          last_name: user.last_name,
          net_id: user.net_id !== 'undefined' ? user.net_id : session.user,
          level: user.level !== 'undefined' ? user.level : 'none',
          type: user.type !== 'undefined' ? user.type : 'student'
        })

        return newUser.save()
          .then(user => user)
          .catch(err => console.log(err))
      }
    },

    addListChange: {
      type: ListChangesType,
      args: {
        changes: {
          type: new GraphQLNonNull(ListChangesInputType)
        }
      },
      resolve: (root, { changes }, session) =>
        ListChangesModel.findOneAndUpdate({list_id: changes.list_id, list_type: changes.list_type, net_id: session.user},
          {$set: { rows: changes.rows }},
          {new: true, upsert: true})
          .then(listChanges => listChanges)
          .catch(err => console.log(err))
    },

    removeListChanges: {
      type: GraphQLString,
      args: {
        list_id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        list_type: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (parent, { list_id, list_type }, session) => ListChangesModel.remove({list_id: list_id, list_type: list_type, net_id: session.user})
    },

    removeUser: {
      type: GraphQLString,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (root, { _id }, session) =>
        UserModel.remove({_id: _id})
          .then(info => 'success')
          .catch(err => {
            console.log(err)
            return 'error'
          })
        // also remove any entries under their net_id in list_changes
    },

    updateList: {
      type: GraphQLString,
      args: {
        list: {
          type: new GraphQLNonNull(ListInputType)
        }
      },
      resolve: (root, { list }, session) => {
        // console.log(list)
        if (session.isAdmin) {
          return ListModel.update({id: list.id}, { $set: { data: list.data } })
        }
      }
    },

    updateUser: {
      type: UserType,
      args: {
        user: {
          type: new GraphQLNonNull(UpdateUserInputType)
        }
      },
      resolve: (root, { user }, session) =>
        UserModel.findOneAndUpdate({_id: user._id},
          {$set: { first_name: user.first_name, last_name: user.last_name, net_id: user.net_id, level: user.level, type: user.type }},
          { new: true })
          .then(user => user)
          .catch(err => console.log(err))
    }
  }
})

module.exports = Mutation
