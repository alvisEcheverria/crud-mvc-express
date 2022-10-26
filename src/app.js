const express = require('express');
const app = express();
const usersRoutes = require('./routes/users.routes')

app.use(express.json())
app.use('/api/v1', usersRoutes);

module.exports = app;