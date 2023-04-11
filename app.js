const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Project: Building a CICD pipeline with AWS build stacks like AWS Code Pipeline and Code Build'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
