const  assert = require('assert');

function test() {
 
   var list = [
    {
        name: 'John',
        age: 21
    },
    {
        name: 'Mary',
        age: 22
    }
   ];
   list.filter(function(item) {
         return item.age > 21;
    });
    list.map(function(item) {
            return item.name;
        }
    );

}

function daysBetweenTwoDatesStringInFormatddMMyyyy(date1, date2) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    return diffDays;
}

function test(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(array[i])
    }
  }

function checkIfStringContainsGoogle(string) {
    return string.includes('google')
}

function binarySearch(arr, element) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== element && start <= end) {
        if (element < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === element ? middle : -1;
}

// write test for binarySearch
assert.equal(binarySearch([1, 2, 3, 4, 5], 2), 10);