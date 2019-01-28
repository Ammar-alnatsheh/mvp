const mongoose = require('mongoose');
const eventsAutoIncrement = require('mongoose-auto-increment');

const DB_HOST = process.env.DB_HOST || 'localhost';
mongoose.connect(`mongodb://${DB_HOST}:27017/events`, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB');
});

eventsAutoIncrement.initialize(db);

const eventsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  catagory: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  time: Number,
  description: String,
});

eventsSchema.plugin(eventsAutoIncrement.plugin, {
  model: 'Events',
  field: '_id',
  startAt: 1,
  incrementBy: 1,
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = { Events };
