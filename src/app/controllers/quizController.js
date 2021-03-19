const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Quiz = require('../models/quiz');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const quiz = await Quiz.find().populate('quiz');

    return res.send({ quiz });
  } catch (err) {
    return res.status(400).send({ error: 'Error loading new quiz' })
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