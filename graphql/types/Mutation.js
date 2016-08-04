'use strict'

// dependencies
const graphql = require('graphql')
const sortBy = require('lodash/sortBy')
const GraphQLID = graphql.GraphQLID
const GraphQLInt = graphql.GraphQLInt
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

// graphql types
const ListChangesInputType = require('./ListChangesInput')
const NewUserInputType = require('./NewUserInput')
const UpdateUserInputType = require('./UpdateUserInput')

// mongodb models
const ListChangesModel = require('../../models/ListChanges')
const UserModel = require('../../models/User')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addNewUser: {
      type: GraphQLString,
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
          level: user.level,
          type: user.type !== 'undefined' ? user.type : 'student'
        })

        newUser.save()

        return
      }
    },

    addListChange: {
      type: GraphQLString,
      args: {
        changes: {
          type: new GraphQLNonNull(ListChangesInputType)
        }
      },
      resolve: (root, { changes }, session) => {
        ListChangesModel.findOne({list_id: changes.list_id, list_type: changes.list_type, net_id: session.user}).then(res => {
          if (res === null) {
            const newChange = new ListChangesModel({
              list_id: changes.list_id,
              list_type: changes.list_type,
              net_id: session.user,
              rows: changes.rows
            })
            newChange.save()
          } else {
            let rows = [
              ...res.rows,
              ...changes.rows
            ]
            rows = sortBy(rows)
            ListChangesModel.update({list_id: changes.list_id, list_type: changes.list_type, net_id: session.user}, {$set: {rows: rows}}).exec()
          }
        }).catch(err => {
          console.log(err)
        })

        return
      }
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
      resolve: (root, { _id }, session) => {
        UserModel.remove({_id: _id}, function (err, success) {
          if (err) {
            console.log(err)
            return err
          }
          return success
        })
        // also remove any entries under their net_id in list_changes
      }
    },

    updateUser: {
      type: GraphQLString,
      args: {
        user: {
          type: new GraphQLNonNull(UpdateUserInputType)
        }
      },
      resolve: (root, { user }, session) => {
        UserModel.update({_id: user._id}, {$set: { first_name: user.first_name, last_name: user.last_name, net_id: user.net_id, level: user.level, type: user.type }}, function (err, success) {
          if (err) {
            console.log(err)
            return
          }
          return
        })
      }
    }
  }
})

module.exports = Mutation
