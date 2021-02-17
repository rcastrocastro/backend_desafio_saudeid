const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Customer = require('../models/customer');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find().populate('user');

    return res.send({ customers });
  } catch (err) {
    return res.status(400).send({ error: 'Error loading new customer' });
  }
});

router.get('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId).populate('user');

    return res.send({ customer })
  } catch (err) {
    return res.status(400).send({ error: 'Error loading customer' });
  }
});

router.post('/', async (req, res) => {
  try {
    const customer = await Customer.create({ ...req.body, user: req.userId});

    return res.send({ customer });
    
  } catch (err) {
    return res.status(400).send({ error: 'Error creating new customer' });
  }
});

router.put('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.customerId, req.body).populate('user');

    return res.send({ customer });
    
  } catch (err) {
    return res.status(400).send({ error: 'Error updateting customer' });
  }
});

router.delete('/:customerId', async (req, res) => {
  try {
    await Customer.findByIdAndRemove(req.params.customerId);

    return res.send();
  } catch (err) {
    return res.status(400).send({ error: 'Error deleting customer' });
  }
});

module.exports = app => app.use('/customers', router);