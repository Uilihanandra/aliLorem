function getAllCompositeMarks() {
  const db = require('./database');
  return db.query('SELECT * FROM composite_marks');
}
