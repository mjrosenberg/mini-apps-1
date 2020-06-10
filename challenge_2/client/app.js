var appendCSV = (csv) => {
  //console.log(document);
  document.getElementById('csv').innerText = csv;
}
module.exports = {
  appendCSV: appendCSV
}
//this doesn't work properly