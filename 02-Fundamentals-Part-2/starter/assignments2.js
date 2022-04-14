////////////////////////////////
// FUNCTIONS
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}!`;
// }

// const info1 = describeCountry('USA', 300, 'Washington D.C.');
// const info2 = describeCountry('Spain', 46, 'Madrid');
// const info3 = describeCountry('Italy', 59, 'Rome');

// console.log(info2);

////////////////////////////////////


////////////////////////////////////
// FUNCTION DECLARATIONS VS. EXPRESSIONS
worldPop = 7900
function  percentageOfWorld1(population) {
    return (population / 7900) * 100;
};

const percentUSA = percentageOfWorld1(300);
const percentSpain = percentageOfWorld1(46);
const percentItaly = percentageOfWorld1(59);


const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percentUSA2 = percentageOfWorld2(300);
const percentSpain2 = percentageOfWorld2(46);
const percentItaly2 = percentageOfWorld2(59);


console.log(percentUSA);
console.log(percentItaly2)

////////////////////////////////////