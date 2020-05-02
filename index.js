const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello and welcome to home page!'));

app.get('/status', (req, res) => res.send('If you see this! things are good.'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));