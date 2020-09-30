const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`))

module.exports = {
  Recipe: require('./recipes'),
}