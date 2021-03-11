const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Oops! O campo nome é obrigatório.'],
  },
  last_name: {
    type: String,
    require: [true, 'Oops! O campo sobrenome é obrigatório.'],
  },
  birth_date: {
    type: Date,
    reqire: [true, 'Oops! O campo Data de nascimento é obrigatório.'],
  },
  email: {
    type: String,
    unique: true,
    require: [true, 'Oops! O campo email é obrigatório.'],
    lowercase: true,
  },
  phone: {
    type: String,
  },
  cell_phone: {
    type: String,
  },
  gender: {
    type: String,
    possibleValues: ['male','female'],
    require: [true, 'Oops! É obrigatório selecionar seu gênero.'],
  },
  marital_status: {
    type: String,
    possibleValues: ['single','married', 'divorced'],
    require: [true, 'Oops! É obrigatório selecionar seu Estado Civil.'],
  },
  sons:{
    type: String,
    possibleValues: ['yes','no'],
  },
  how_many: {
    type: String,
    possibleValues: ['none', 'one', 'two', 'three', 'More than three']
  },
  address: {
    zip_code: {
      type: String,
      require: [true, 'Oops! O campo cep é obrigatório.'],
    },
    street: {
      type: String,
      require: [true, 'Oops! O campo logradouro é obrigatório.'],
    },
    number: {
      type: String,
      require: [true, 'Oops! O campo número é obrigatório.'],
    },
    complement: {
      type: String,
    },
    neighborhood: {
      type: String,
      require: [true, 'Oops! O campo bairro é obrigatório.'],
    },
    city: {
      type: String,
      require: [true, 'Oops! O campo cidade é obrigatório.'],
    },
    state: {
      type: String,
      require: [true, 'Oops! O campo estado é obrigatório.'],
    },
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

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;