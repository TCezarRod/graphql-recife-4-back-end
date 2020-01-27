const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

const db = require("./db");

const typeDefs = importSchema("src/schema.graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      places: () => {
        return db.places;
      }
    },
    Mutation: {
      createPlace: (_root, { place }) => {
        const newPlace = { ...place, id: ++db.lastId };
        db.places.push(newPlace);

        return newPlace;
      }
    },
    Place: {
      name: obj => {
        return obj.name || db.places.find(place => place.id === obj.id).name;
      },
      address: obj => {
        return (
          obj.address || db.places.find(place => place.id === obj.id).address
        );
      },
      competitors: obj => {
        if (obj.competitors) return obj.competitors;

        const competitorIDs =
          db.places.find(place => place.id === obj.id).competitorIDs || [];

        return competitorIDs.map(id => ({
          id: Number.parseInt(id)
        }));
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log("Listening at " + url);
});
