const Question = require('../app/models/question')
const mongoose = require('mongoose');

mongoose.connect('mongodb://rootdesafioqa:SaudeiDdesafioqa@192.168.99.100:27017/saudeiddesafioqa', {
  // useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => Question.initQuestions(Question))

mongoose.Promise = global.Promise;

module.exports = mongoose;