const pSql = require('./postgres_index');

function selectEvents(values, callback) {
  pSql.query("SELECT * FROM events WHERE date >= NOW() AND date <= NOW() + interval '5 day' ORDER BY date", [], (err, data) => {
    if (err) {
      callback(err.stack);
    } else {
      callback(null, data.rows);
    }
  });
}

function insertEvent(values, callback) {
  const record = [values.name || '', values.title || '', values.catagory || 0, values.date || Date.now(), values.time || 0, values.description || ''];
  pSql.query('INSERT INTO events (name, title, catagory, date, time, description) VALUES ($1, $2, $3, $4, $5, $6)', record, (err, data) => {
    if (err) {
      callback(err.stack);
    } else {
      callback(null, data.rows);
    }
  });
}

function deleteEvent(id, callback) {
  pSql.query('DELETE FROM events WHERE id = ($1)', [id], (err, data) => {
    if (err) {
      callback(err.stack);
    } else {
      callback(null, data.rows);
    }
  });
}

module.exports = {
  pSql: {
    selectEvents,
    insertEvent,
    deleteEvent,
  },
};
