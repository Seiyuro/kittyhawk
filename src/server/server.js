// var express = require('express');
// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return "http://api.kittyhawk.io/graphql?token=HWm0tPtem7oY2xJ8MBhPn7RpTTpXCaZF"
//   },
// };

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(4000);
// console.log('Running a GraphQL API server at localhost:4000/graphql');

// const { createApolloFetch } = require('apollo-fetch');

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
const client = new ApolloClient({
    uri: 'http://api.kittyhawk.io/graphql?token=HWm0tPtem7oY2xJ8MBhPn7RpTTpXCaZF'
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

// fetch({
//   query: '{ posts { title }}',
// }).then(res => {
//   console.log(res.data);
// });

// // You can also easily pass variables for dynamic arguments
// fetch({
//   query: `{
//     account {
//       name
//         id
//       owner {
//         id
//         last_name
//         first_name
//         email
//       }
//       flights {
//         id
//         duration
//       }
//       }
//   }`,
//   variables: { id: 1 },
// }).then(res => {
//   console.log(res.data);
// });