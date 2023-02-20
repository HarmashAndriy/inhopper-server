const mongoose = require('mongoose');
require('dotenv').config()
const dbkey = process.env.URL_MONGO

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(dbkey, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected!')
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
