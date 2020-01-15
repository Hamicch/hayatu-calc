function squareNumber(number) {
        return number ** 2;
}
// console.log('The result of squaring the number 3 is '+ squareNumber(n));




function halfNumber(number) {
        return number / 2;
}
// let number = 50;
// console.log(halfNumber(number));




function percentOf(numerator, denorminator) {
        return numerator / denorminator * 100 + '%';
}

// let numerator = 7;
// let denorminator = 40; 
// console.log(percentOf(numerator, denorminator));



function areaOfCircle(radius) {
        return Math.PI.toFixed(2) * squareNumber(radius);
}
// let radius = 2

// console.log(areaOfCircle(radius));

// console.log(areaOfCircle(radius).toFixed(2));


function calc(number) {
        half = halfNumber(number);
        square = squareNumber(half);
        area = areaOfCircle(square);
        percentage = percentOf(area, square);
        console.log(half);
        console.log(square);
        console.log(area);
        console.log(percentage);
        console.log(calc)
}
calc(30);