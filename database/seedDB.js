const generateEvents = require('./generateEvents');

generateEvents(() => {
  process.exit(1);
});

// mongoimport -d events -c Events --type tsv --file 'eventsData.tsv' -f
// _id,name,title,catagory,date,time,description  --numInsertionWorkers 8

// update the id counter after seeding
//   const eventIdCounter = {
//     count: 1000,
//     model: 'Events',
//     field: '_id',
//     __v: 0,
//   }
