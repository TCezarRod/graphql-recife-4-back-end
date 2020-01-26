const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      hello: () => "Hello GraphQL!"
    }
  }
});

server.listen().then(({ url }) => {
  console.log("Listening at " + url);
});
