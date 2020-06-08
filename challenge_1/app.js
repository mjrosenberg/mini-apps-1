const squares = document.querySelectorAll('td');
console.log(squares);
for (square of squares) {
  square.addEventListener('click',(event) =>{
    console.log('event listener working', square.attributes);
  });
}
