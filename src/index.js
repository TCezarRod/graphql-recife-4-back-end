const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

const db = require("./db");

const typeDefs = importSchema("src/schema.graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      places: (_root, { first, offset = 0 }) => {
        return db.places.slice(offset, first && first + offset);
      }
    },
    Mutation: {
      createPlace: (_root, { place }) => {
        const newPlace = { ...place, id: ++db.lastId };
        db.places.push(newPlace);

        return newPlace;
      },
      updatePlace: (_root, { id, place }) => {
        const index = db.places.findIndex(
          ({ id: placeId }) => placeId === Number.parseInt(id)
        );

        if (index < 0) return null;

        Object.keys(place).forEach(key => {
          if (place[key]) {
            if (key === "neighbourIDs") {
              db.places[index][key] = place[key].map(id => Number.parseInt(id));
            } else {
              db.places[index][key] = place[key];
            }
          }
        });

        return db.places[index];
      },
      deletePlace: (_root, { id }) => {
        const index = db.places.findIndex(
          ({ id: placeId }) => placeId === Number.parseInt(id)
        );

        if (index >= 0) db.places.splice(index, 1);
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
      neighbours: obj => {
        if (obj.neighbours) return obj.neighbours;

        const neighbourIDs =
          db.places.find(place => place.id === obj.id).neighbourIDs || [];

        return neighbourIDs
          .filter(id => db.places.find(place => place.id === id))
          .map(id => ({
            id: Number.parseInt(id)
          }));
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log("Listening at " + url);
});
