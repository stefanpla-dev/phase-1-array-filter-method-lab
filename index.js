// Code your solution here
function findMatching(arr,str) {
    return arr.filter(name => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arr,str) {
    return arr.filter(name => name[0] === str[0])
}

function matchName(arr,str) {
    return arr.filter(driver => driver.name === str);
}

//arr is an array of driver objects. each driver object has two properties, name and hometown
