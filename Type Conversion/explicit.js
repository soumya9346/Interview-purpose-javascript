// conversion of number explicitly

var result;
result = Number('40');
console.log(result)
console.log(typeof result)

// conversion of string explicitly
var result;
result = String(20); 
console.log(result);
console.log(typeof result)


// conversion of boolean explicitly
var result;
result = Boolean(1);
console.log(result)
console.log(typeof result)


// can convert using parseInt(), parseFloat(), mathfloor()

result = '190.998';
console.log(parseInt(result));
console.log(parseFloat(result));
console.log(mathFloor(result));