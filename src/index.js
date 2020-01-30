const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const _ = require("lodash");

const db = require("./db");

const typeDefs = importSchema("src/schema.graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      place: (_root, { id }) => {
        if (!_.find(db.places, { id })) return null;

        return { id };
      },
      places: (_root, { first, offset = 0 }) => {
        return db.places.slice(offset, first && first + offset);
      }
    },
    Mutation: {
      createPlace: (_root, { place }) => {
        const id = ++db.lastId;
        const newPlace = { ...place, id: id.toString() };
        db.places.push(newPlace);

        return newPlace;
      },
      updatePlace: (_root, { id, place }) => {
        const index = _.findIndex(db.places, { id });

        if (index < 0) return null;

        Object.keys(place).forEach(key => {
          if (place[key]) {
            db.places[index][key] = place[key];
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
        return obj.name || _.find(db.places, { id: obj.id }).name;
      },
      address: obj => {
        return obj.address || _.find(db.places, { id: obj.id }).address;
      },
      neighbours: obj => {
        if (obj.neighbours) return obj.neighbours;

        const neighbourIDs =
          obj.neighbourIDs ||
          _.find(db.places, { id: obj.id }).neighbourIDs ||
          [];

        return neighbourIDs
          .filter(id => _.find(db.places, { id }))
          .map(id => ({ id }));
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log("Listening at " + url);
});
