const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Quiz = require('../models/quiz');
const Question = require('../models/question');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const question = await Question.find({});
    
    return res.send({ question });
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const quiz = await Quiz.create({ ...req.body, user: req.userId});

    return res.send({ quiz });
    
  } catch (err) {
    return res.status(400).send({ error: 'Error creating new quiz' });
  }
});

module.exports = app => app.use('/quiz', router);