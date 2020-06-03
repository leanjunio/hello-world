const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));
app.get('/a', (req, res) => res.send('Hello world!'));
app.get('/api', (req, res) => res.send('hello world from api'));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));