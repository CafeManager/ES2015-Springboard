const double = ( arr ) => {
    return arr.map( (val) => val*2 );
}

function squareAndFindEvens(numbers){
    var squares = numbers.map((num) => num ** 2);
    var evens = squares.filter((square) => square % 2 === 0);
    return evens;
}

