const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const questions = require('../../config/questions.json');
let Question

const QuestionSchema = mongoose.Schema({
  question: {
    type: String,
    require: true
  },
  correctAnswer: {
    type: Number,
    require: true
  },
  options: {
    type: [{ type: String }],
    require: true
  }
});

QuestionSchema.statics.initQuestions = (Question) => {
  let _questions = questions

  Question.deleteMany({}, (err) => {
    _questions.forEach(q => {
      Question.create(q);
    })
  })
}

Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;