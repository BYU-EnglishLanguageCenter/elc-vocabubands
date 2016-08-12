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
      type: GraphQLInt
    },
    word: {
      type: GraphQLString
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

const ListInputType = new GraphQLInputObjectType({
  name: 'ListInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    data: {
      type: new GraphQLList(RowInputType)
    }
  }
})

module.exports = ListInputType
