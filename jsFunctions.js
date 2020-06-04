
let foo= ['we', 'love', 'food'];//test array
let mark = [1,2,3,6,9];

//MY EACH\\ 
const myEach = (array, mycallback) => { //loops through array and makes a callback on each element inside an array.
    for(let i=0; i<array.length; i++){
        mycallback(array[i]);
    }
};
/*
foo.forEach(element => console.log(element));
myEach(foo,contains => console.log(contains));
*/

///MyMAP\\\---------------------------------------------------------------------------------------------------------------------------------------------------------
const myMap = (array, mycallback) => {//creates a new array in which what was on the original will be pushed onto
    let newArray =[];
    for(let i= 0; i <array.length; i++){
        newArray.push(mycallback(array[i]));//maps content of old array to new array by being pushed 
    }
    return newArray;
};

/*
// pass a function to map
const map1 = mark.map(x => x * 2);
const map2 = myMap(mark , x=> x*2);
console.log(map1);
console.log(map2);
*/

///MyFilter\\\---------------------------------------------------------------------------------------------------------------------------------------------------------
const myFilter = (array, mycallback) => {//filters out items by pushing them to a new array.
    let newArray = [];
    for(let i=0; i< array.length; i++){
        if(mycallback(array[i])){//if the array follows the paramater passed and it invokes the callback if condition it will push it to the newArray 
            newArray.push(array[i]);
        }
        else{

        }
    }
    return newArray;
};
/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
const test = myFilter(words, word => word.length >6);

console.log(result);
console.log(test);
*/

///MySome\\\---------------------------------------------------------------------------------------------------------------------------------------------------------
const mySome = (array,mycallback) => {
    for(let i=0; i<array.length;i++){ //as it loops if one or more of the elements fits the parameters then it returns true if none then it defaults to false.
        if(mycallback(array[i])){
            return true
        }
    }
    return false;
}
/*
const sample = [1, 2, 3, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(sample.some(even));
console.log(mySome(sample,even), "mySome");
*/

///myEvery\\\---------------------------------------------------------------------------------------------------------------------------------------------------------
const myEvery = (array, mycallback) => { //checks wether or not if every element in an array follows parameter passed and returns true if they are or false if they aren't.
    for(let i=0; i<array.length; i++){
        if(!mycallback(array[i])){//checks if does not follow order return false else return true.
            return false;
        }
    }
    return true;
};
/*
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 43];

console.log(array1.every(isBelowThreshold));//original one used for test if the result is the same
console.log(myEvery(array1,isBelowThreshold));
*/

//myReduce\\---------------------------------------------------------------------------------------------------------------------------------------------------------
const myReduce = (array, mycallback) => {//adds all elements and an accumulator if there is one into one value
    let sum;
    if(mycallback === undefined){ //checks whether or not there is an accumulator and takes care of it if undefined
        sum=0;
    }
    else{
        sum = mycallback //sets the sum to the accumulator
    }
    for(let i=0; i<array.length; i++){ //adds all the elements in the array into one value.
        sum+=(array[i]); 
    }

    return sum;
}
/*
const example = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(example.reduce(reducer));
// expected output: 10
console.log(myReduce(example));

// 5 + 1 + 2 + 3 + 4
console.log(example.reduce(reducer, 5));
console.log(myReduce(example,5))
*/

//myIncludes\\---------------------------------------------------------------------------------------------------------------------------------------------------------
const myIncludes = (array, mycallback) => { //searches for if a an element is in the array.
    for(let i=0; i<array.length; i++){
        if(array[i]===mycallback){//checks if any element passed follows matches the users call for and will return ture if in array
            return true;
        }
    }
    return false;
} 
/*
const show = [1, 2, 3];

console.log(show.includes(2));
// expected output: true
console.log(myIncludes(show,2));

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true
console.log(myIncludes(pets,'cat'));

console.log(pets.includes('at'));
// expected output: false
console.log(myIncludes(pets,'at'));
*/

//indexOf\\------------------------------------------------------------------------------------------------------------------------------------------------------------
const myIndexOf = (array, mycallback , start) => {//looks for index of a an element user enters
    let index = start;
    if(index === undefined){//handles case if there is no starting position.
        index=0;
    }
    for(let i = index; i<array.length; i++){//checks whether of not the element its looking for is in the array.
        if(array[i] === mycallback){
            return i;
        }
    }
    return -1;
}
/*
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(myIndexOf(beasts,'bison'));

console.log(beasts.indexOf('bison', 2));
console.log(myIndexOf(beasts,'bison', 2));

console.log(beasts.indexOf('giraffe'));
console.log(myIndexOf(beasts,'egg'));
*/


//myPush\\---------------------------------------------------------------------------------------------------------------------------------------------------------
const myPush = (array, elementToAdd) => {//adds a new element to array
    array[array.length]=elementToAdd;//adds to the end of the array the new element
    return array;
};
/*
const animals = ['pigs', 'goats', 'sheep'];
console.log(myPush(animals,'cows'));
*/

//LastIndexOf\\---------------------------------------------------------------------------------------------------------------------------------------------------------
const myUnshift = (array, mycallback) => {//finds last index in an array
    let last;
    for(let i=0; i<array.length; i++){
        if(array[i]=== mycallback){//sets the last variable to the last index of seeing an element
            last = i;
        }
    }
    if(last !== undefined){//after looping through array if it doesnt find element it will return -1 if not the last index
        return last;
    }
    else{
        return -1;
    }
};
/*
const reveal = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// expected output: 3
console.log(myUnshift(reveal, 'Dodo'));
console.log(myUnshift(reveal,'Tiger'));
console.log(myUnshift(reveal,'cow'));
*/