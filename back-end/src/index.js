const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const app = express();

mongoose.connect(
    'mongodb://localhost:27017/devLocation', { useNewUrlParser: true, useUnifiedTopology: true }
).then(conn => conn).catch(console.error);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Web server runing on port 3333'));