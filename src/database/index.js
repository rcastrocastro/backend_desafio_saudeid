const Question = require('../app/models/question')
const mongoose = require('mongoose');

var developer_db_url = 'mongodb://rootdesafioqa:SaudeiDdesafioqa@127.0.0.1:27017/saudeiddesafioqa';
var mongoUrl = process.env.MONGODB_URI || developer_db_url;

mongoose.Promise = global.Promise;

var connectWithRetry = function () {
    return mongoose.connect(mongoUrl, function (err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
            setTimeout(connectWithRetry, 5000);
        }
    });
};

connectWithRetry().then(() => Question.initQuestions(Question));

// mongoose.connect(mongoUrl, {
//   // useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// }).then(() => Question.initQuestions(Question))

// mongoose.Promise = global.Promise;

module.exports = mongoose;