'use strict'

const graphql = require('graphql')
const GraphQLInputObjectType = graphql.GraphQLInputObjectType
const GraphQLInt = graphql.GraphQLInt
const GraphQLList = graphql.GraphQLList
const GraphQLNonNull = graphql.GraphQLNonNull
const GraphQLString = graphql.GraphQLString

const RowInputType = new GraphQLInputObjectType({
  name: 'RowInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    word: {
      type: new GraphQLNonNull(GraphQLString)
    },
    support_words: {
      type: GraphQLString
    },
    definition: {
      type: GraphQLString
    },
    building_words: {
      type: GraphQLString
    }
  }
})

const UpdateListInputType = new GraphQLInputObjectType({
  name: 'UpdateListInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    data: {
      type: new GraphQLList(RowInputType)
    }
  }
})

module.exports = UpdateListInputType
