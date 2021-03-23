const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express')
const swagger_config = require("../src/config/swagger/swagger-config");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swagger_config.swaggerDocs));

require('./app/controllers/index')(app);

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001')
});
