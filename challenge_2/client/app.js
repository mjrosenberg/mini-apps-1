//build out the post request here and handle the response by displaying it on the index.html file
var appendCSV = (csv) => {
  //console.log(document);
  document.getElementById('csv').innerText = csv;
}
module.exports = {
  appendCSV: appendCSV
}