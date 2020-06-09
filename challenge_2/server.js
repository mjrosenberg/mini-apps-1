const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(express.urlencoded());
app.use(express.json());

var transformToCSV = (jsonObj) => {
  var csv = '';
  var object = JSON.parse(jsonObj);
  var keys = Object.keys(object);
  for (key of keys){
    if (key !== 'children'){
      csv= csv +key+',';
    } else{
      csv= csv.substring(0,csv.length-1) +'\n';
    }
  }
  var transform = (obj) => {
    //var keys = Object.keys(obj);
    console.log('key list', keys);
    for (key of keys){
      if (obj[key] !== undefined){
        if (key === 'children'){
          csv = csv.substring(0,csv.length-1) +'\n'
          for (child of obj[key]){
            transform(child);
          }
        } else{
          csv += obj[key] + ',';
        }
      } else {
        csv += "null,"
      }
    }
  }
  transform(object);
  return csv;
}

app.post('/submit',(req, res)=>{
  var jsonObj = req.body.jsonObj;
  console.log(req.body);
  //req.body.jsonObj contains the values submitted to the form
  //need to return a csv version of that
  var csv = transformToCSV(jsonObj);
  //need to send back a new html page with the csv report and form, but first I'll focus on just converting the json to csv
  res.status(200).send(csv);

});

app.listen(port,()=>console.log('listening on port', port));

