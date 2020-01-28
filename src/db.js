module.exports = {
  places: [
    {
      id: 1,
      name: "Subway",
      address: {
        line1: "Rua da subway",
        city: "Recife",
        country: "Brasil"
      },
      competitorIDs: [2, 3]
    },
    {
      id: 2,
      name: "McDonald's",
      address: {
        line1: "Rua da Mequi",
        city: "Joao Pessoa",
        country: "Brasil"
      },
      competitorIDs: [1]
    },
    {
      id: 3,
      name: "McDonald's",
      address: {
        line1: "Rua da Mequi em SSA",
        city: "Salvador",
        country: "Brasil"
      },
      competitorIDs: [1]
    },
    {
      id: 4,
      name: "Americanas",
      address: {
        line1: "Rua das Americanas",
        city: "Recife",
        country: "Brasil"
      },
      competitorIDs: [5]
    },
    {
      id: 5,
      name: "Casas Bahia",
      address: {
        line1: "Rua da Casas Bahia",
        city: "Recife",
        country: "Brasil"
      },
      competitorIDs: [4]
    }
  ],
  lastId: 1
};
