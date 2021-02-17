const mongoose = require('mongoose');

mongoose.connect('mongodb://rootdesafioqa:SaudeiDdesafioqa@127.0.0.1:27017/saudeiddesafioqa', {
  // useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true 
});
mongoose.Promise = global.Promise;

module.exports = mongoose;