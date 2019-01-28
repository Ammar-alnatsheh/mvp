const mongoDB = require('./mongo_index');

function selectEvents(values, callback) {
  mongoDB.Events.find({ _id: values }, callback);
}

function insertEvent(values, callback) {
  const event = new mongoDB.Events({
    name: values.name || '',
    title: values.title || '',
    catagory: values.catagory || 0,
    date: values.date || Date.now(),
    time: values.time || 0,
    description: values.description || '',
  });
  event.save(callback);
}

function deleteEvent(values, callback) {
  mongoDB.Events.deleteMany({ _id: values }, callback);
}

// function updateIdMongoDB(callback) {
//   const eventIdCounter = {
//     count: 1000,
//     model: 'Events',
//     field: '_id',
//     __v: 0,
//   };
// }

module.exports = {
  mongoDB: {
    selectEvents,
    insertEvent,
    deleteEvent,
  },
};
