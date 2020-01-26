const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

const typeDefs = importSchema("src/schema.graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      places: () => {
        console.log("Query places");

        return [];
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log("Listening at " + url);
});
