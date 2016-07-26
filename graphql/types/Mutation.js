'use strict'

const graphql = require('graphql')
const GraphQLID = graphql.GraphQLID
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const NewUserInputType = require('./NewUserInput')
const UserModel = require('../../models/User')
const UserType = require('./User')
const UpdateUserInputType = require('./UpdateUserInput')

const GraphQLBoolean = graphql.GraphQLBoolean
const GraphQLInt = graphql.GraphQLInt
const GraphQLString = graphql.GraphQLString

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
