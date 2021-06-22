const mongoose = require('mongoose');
class Database {
  constructor() {
    mongoose.connect(`mongodb://${ process.env.DB_HOST }/${ process.env.DB_SCHEMA }`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Database connection successful!')).catch(err => console.error('Database connection error!'));
  }
}

/* Assigning a singleton instance and making available globally */
module.exports = new Database();
