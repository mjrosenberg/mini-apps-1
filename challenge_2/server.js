const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(express.urlencoded());

app.get('/', (req,res)=>{
  //console.log('hello');
  res.send('hello');
  //idk if this is even needed
});

app.post('/submit',(req, res)=>{
  var csv = '';
  var jsonObj = req.body.jsonObj;
  //req.body.jsonObj contains the values submitted to the form
  //need to return a csv version of that
  res.status(200).send(csv);

});

app.listen(port,()=>console.log('listening on port', port));

