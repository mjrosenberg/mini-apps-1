//const clientApp = require('./client/app');
const express = require('express');
const fs = require('fs');
const formidable = require('formidable')
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(express.urlencoded());
app.use(express.json());


var transformToCSV = (jsonObj) => {
  var csv = '';
  var object;
  if (typeof jsonObj === 'string'){
    object = JSON.parse(jsonObj);
  } else{
    object = jsonObj;
  }
  var keys = Object.keys(object);
  for (key of keys){
    if (key !== 'children'){
      csv= csv +key+',';
    } else{
      csv= csv.substring(0,csv.length-1);
      csv += '\n';
    }
  }
  var transform = (obj) => {
    for (key of keys){
      if (obj[key] !== undefined){
        if (key === 'children'){
          csv= csv.substring(0,csv.length-1);
          csv += '\n';
          //idk why on my webpage it's only displaying a space and not a new line
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

app.post('/submit', (req, res)=>{
  // var jsonObj = req.body.jsonObj;
  // // console.log(req.body.jsonObj);
  // // console.log(jsonObj);
  // var csv = transformToCSV(jsonObj);
  // res.status(200).send(csv);
  //Above this line works for input text files
  new formidable.IncomingForm().parse(req, (err, fields, file) => {
    if (err) {
      console.error('Error', err)
      throw err
    }
    var path = file.jsonObj.path;
    console.log('path inside', path);
    var data = JSON.parse(fs.readFileSync(path));
    console.log('data', data);
    var csv = transformToCSV(data);
    res.status(200).send(csv);
  })

});

app.listen(port,()=>console.log('listening on port', port));

