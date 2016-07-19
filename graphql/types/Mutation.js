'use strict'

const graphql = require('graphql')
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLObjectType = graphql.GraphQLObjectType
const UserInputType = require('./UserInput')
const UserModel = require('../../models/User')
const UserType = require('./User')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addNewUser: {
      type: UserType,
      args: {
        user: {
          type: new GraphQLNonNull(UserInputType)
        }
      },
      resolve: (root, { user }, session) => {
        const newUser = new UserModel({
          first_name: user.first_name,
          last_name: user.last_name,
          net_id: session.user,
          level: user.level,
          type: 'student'
        })

        newUser.save()

        return user
      }
    }
  }
})

module.exports = Mutation
