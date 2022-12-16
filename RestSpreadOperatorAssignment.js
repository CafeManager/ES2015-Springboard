function filterOutOdds(...nums) {   
    return nums.filter(function(num) {
      return num % 2 === 0;
    });
  }

function findMin(...args){
    const x = args.reduce((acc, nextVal) => {
        return nextVal > acc ? acc : nextVal;  
    })
}

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

function doubleAndReturnArgs(arr, ...rest){
    const doubledRest = rest.map(x => x*2);
    return [...arr, ...doubledRest];
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const eleToRemove = Math.floor(Math.random() * items.length);
    const arr1 = items.slice(0,eleToRemove);
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    const obj2 = {...obj, key:val};
    return obj2;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const obj2 = {...obj};
    delete obj2[key];
    return obj2;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    const obj = {...obj1, ...obj2};
    return obj;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const obj2 = {...obj};
    obj2[key] = val;
    return obj2;
}