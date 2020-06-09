const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));

app.get('/', (req,res)=>{
  //console.log('hello');
  res.send('hello');
});

app.listen(port,()=>console.log('listening on port', port));

