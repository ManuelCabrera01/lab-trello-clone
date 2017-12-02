
const mongoose = require('mongoose');
const dbName = 'irontrello';
require ("dotenv").config();


// connect to the database
mongoose.connect(`mongodb://localhost/${dbName}` , { useMongoClient: true }); //fixes Deprecation Warning
mongoos4.connect(process.env.MONGODB_URI);
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to the ${dbName} database`);
});
MONGO
