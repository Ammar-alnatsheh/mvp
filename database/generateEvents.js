const faker = require('faker');
const fs = require('fs');

function generate1000Record(callback) {
  //  populate the products table with dynamic faker data
  for (let i = 1; i <= 1000; i++) {

    const name = faker.name.findName();
    const title = faker.name.title();
    const catagory = faker.random.number({'min': 0,'max': 12});
    const date = faker.date.between('2019-01-28', '2019-02-05');
    const time = parseFloat( '' + faker.random.number({'min': 0,'max': 24}) + '.' + faker.random.number({'min': 0,'max': 60}) );
    const description = faker.lorem.paragraph();

    const record = [i, name, title, catagory, date, time, description].join('\t');
    fs.appendFileSync('./eventsData.tsv', record + '\n');
  }
  console.log('////////////////////////////');
  console.log('  write 1000 record for events');
  console.log('////////////////////////////');

  callback();
}

module.exports = generate1000Record;
