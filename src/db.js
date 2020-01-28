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
      neighbourIDs: [2]
    },
    {
      id: 2,
      name: "McDonald's",
      address: {
        line1: "Rua da Mequi",
        city: "Joao Pessoa",
        country: "Brasil"
      },
      neighbourIDs: [1, 4]
    },
    {
      id: 3,
      name: "McDonald's",
      address: {
        line1: "Rua da Mequi em SSA",
        city: "Salvador",
        country: "Brasil"
      },
      neighbourIDs: [4, 5]
    },
    {
      id: 4,
      name: "Americanas",
      address: {
        line1: "Rua das Americanas",
        city: "Recife",
        country: "Brasil"
      },
      neighbourIDs: [5]
    },
    {
      id: 5,
      name: "Casas Bahia",
      address: {
        line1: "Rua da Casas Bahia",
        city: "Recife",
        country: "Brasil"
      },
      neighbourIDs: [4]
    }
  ],
  lastId: 1
};
