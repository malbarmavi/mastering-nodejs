const rect = require('./rectangle');

// console.log(rect.area(5, 3));
// console.log(rect.perimeter(5, 3));
// l length , w width
function solveRect(l, w) {
    console.log(`rectangle with l = ${l} and w = ${w}`);

    if (l <= 0 || w <= 0) {
        console.log(`rectangle dimension should be greater than zero`);
    } else {
        console.log(`area => ${rect.area(l, w)}`);
        console.log(`perimeter => ${rect.perimeter(l, w)}`);
    }

}

solveRect(2, 5);
solveRect(10, 15);
solveRect(-5, 15);
solveRect(0, 15);
solveRect(1, 0);