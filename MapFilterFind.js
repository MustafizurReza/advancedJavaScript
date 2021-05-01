const number = [1,2,3,4,5,6,7,8,9,10];
const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

/// another way using map

const mapOutput = number.map( x => x * x);
console.log(mapOutput);

/// map
number.map(function (element,index,array) {
    console.log(element,index,array);
})

/// filter

const filterOutputs = number.filter(x => x > 4);
console.log(filterOutputs);

/// find

const findOutput = number.find( x => x > 9);
console.log(findOutput);


