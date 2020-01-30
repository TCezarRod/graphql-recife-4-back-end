// This script was used to generate the data in db.js

const faker = require("faker");
const _ = require("lodash");
faker.locale = "pt_BR";

const array = [];
const COUNT = 20;
for (var i = 1; i <= COUNT; i++) {
  array.push({
    id: i.toString(),
    name: faker.company.companyName(),
    address: {
      streetName: faker.address.streetName(),
      number: faker.random.number(1000),
      city: faker.address.city()
    },
    neighbourIDs: _.times(faker.random.number(5)).map(() =>
      faker.random.number(COUNT).toString()
    )
  });
}

console.log(array);
