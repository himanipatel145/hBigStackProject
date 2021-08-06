const express = require("express");
require('./db/connection');
const bodypareser = require('body-parser');

const PORT = process.env.PORT || 9009;

const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const question = require('./routes/api/question');

const app = express();

app.use(bodypareser.urlencoded({ extended: false }));
app.use(bodypareser.json());

app.use('/api/auth', auth)
app.use('/api/profile', profile)
app.use('/api/question', question)

app.listen(PORT, () => console.log("Server is running"))