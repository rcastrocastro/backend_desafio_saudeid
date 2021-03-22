const Question = require('../app/models/question')
const mongoose = require('mongoose');

mongoose.connect('mongodb://rootdesafioqa:SaudeiDdesafioqa@127.0.0.1:27017/saudeiddesafioqa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => Question.initQuestions(Question))

mongoose.Promise = global.Promise;

module.exports = mongoose;