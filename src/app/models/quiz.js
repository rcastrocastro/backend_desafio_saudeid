const mongoose = require('../../database')
const bcrypt = require('bcryptjs');

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  correctAnswer: {
    type: String,
    require: true,
  },
  candidateAnswer: {
    type: String,
    require: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;