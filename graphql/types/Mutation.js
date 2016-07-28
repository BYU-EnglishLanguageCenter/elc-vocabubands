'use strict'

// dependencies
const graphql = require('graphql')
const sortBy = require('lodash/sortBy')
const GraphQLID = graphql.GraphQLID
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLString = graphql.GraphQLString

// graphql types
const ListChangeInputType = require('./ListChangeInput')
const NewUserInputType = require('./NewUserInput')
const UpdateUserInputType = require('./UpdateUserInput')

// mongodb models
const ListChangeModel = require('../../models/ListChange')
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
          type: new GraphQLNonNull(ListChangeInputType)
        }
      },
      resolve: (root, { changes }, session) => {
        ListChangeModel.findOne({list_id: changes.list_id, list_type: changes.list_type, net_id: session.user}).then(res => {
          if (res === null) {
            const newChange = new ListChangeModel({
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
            ListChangeModel.update({list_id: changes.list_id, list_type: changes.list_type, net_id: session.user}, {$set: {rows: rows}}).exec()
          }
        }).catch(err => {
          console.log(err)
        })

        return
      }
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
