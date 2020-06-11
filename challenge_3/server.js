const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//add routes here

app.listen(port, () => console.log(`listening at http://localhost:${port}`))

