/*
            ARROW FUNCTIONSSSS
*/

[1,2,3].forEach(function(n,idx){
console.log(n,idx);
});
// is the SAME as...

[1,2,3].forEach((n,idx) => {
    console.log(n,idx);
});


//--------------------------------

// ARROW FUNCTION EXERCIES // REFACTORING

//before
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
//after
const double = arr => arr.map(val => val * 2);




//before
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
  

//after
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

  