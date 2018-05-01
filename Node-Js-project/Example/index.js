var rect = require('./rectangle');

function solveRect(a,b){
    console.log("Solving for a = ${a}, b = ${b}")

    console.log("The area is: " + rect.area(a,b));
    console.log("The perimeter is: " + rect.perimeter(a,b));
}

solveRect(5,7);
