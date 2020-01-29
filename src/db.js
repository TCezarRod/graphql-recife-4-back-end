const faker = require("faker");
faker.locale = "pt_BR";

module.exports = {
  places: [
    {
      id: 1,
      name: "Subway",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [2]
    },
    {
      id: 2,
      name: "McDonald's",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [1, 4]
    },
    {
      id: 3,
      name: "McDonald's",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [4, 5]
    },
    {
      id: 4,
      name: "Americanas",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [5]
    },
    {
      id: 5,
      name: "Casas Bahia",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [4]
    },
    {
      id: 6,
      name: "Casas Bahia",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [4, 5]
    },
    {
      id: 7,
      name: "Casas Pernambuco",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [1, 8, 6]
    },
    {
      id: 8,
      name: "In Loco",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [9]
    },
    {
      id: 9,
      name: "ThoughtWorks",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [8]
    },
    {
      id: 10,
      name: "GraphQL Town",
      address: {
        line1: faker.address.streetName(),
        city: faker.address.city(),
        country: "Brasil"
      },
      neighbourIDs: [1, 2, 3, 4, 8, 9]
    }
  ],
  lastId: 10
};
