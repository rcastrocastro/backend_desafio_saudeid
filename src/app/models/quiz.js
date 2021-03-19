const mongoose = require('../../database')
const bcrypt = require('bcryptjs');

const QuizSchema = new mongoose.Schema({
  question1: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question2: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question3: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question4: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question5: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question7: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question8: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question9: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question10: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question11: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question12: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question13: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question14: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },
  question15: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
  },question2: {
    type: String,
    possibleValues: ['1', '2', '3', '4', '5']
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