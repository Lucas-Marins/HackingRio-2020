const express = require('express')
const app = express();
app.use(express.json())
const routes= require('./routes')
const cors = require('cors');

app.use(cors());
app.use(routes);

app.listen(3333)