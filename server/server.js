require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res, next)=> { res.sendFile(path.join(__dirname, '../static/index.html'))});

app.use('/api/auth', require('./api/auth'));
app.use('/api', require('./api'));

app.use((err, req, res, next)=> {
    res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;
