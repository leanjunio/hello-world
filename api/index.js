const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('This is supposed to be updated!'));
app.get('/ab', (req, res) => res.send('Hello world!'));
app.get('/api', (req, res) => res.send('hello world from api'));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));