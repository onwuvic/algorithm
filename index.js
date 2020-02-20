/*
Super Fast                                                          Super Slow
--------------------------------------------------------------------------------
| Name             | Constant | Logarithmic | Linear | Quadratic | Exponential |
--------------------------------------------------------------------------------
| Notation (Big-O) |  O(1)    | O(logn)     | O(n)   | O(n^2)    | O(k^n)      |
--------------------------------------------------------------------------------

------------------------------------------------------------------------------------
| Complexity    | Operation                                                        |
------------------------------------------------------------------------------------
| O(1)          | Running a statement, Value lookup on an array, object, variable  |
------------------------------------------------------------------------------------
| O(logn)       | Loop that cut problem in half every iteration                    |
------------------------------------------------------------------------------------
| O(n)          | Looping through all the values of an array                       |
------------------------------------------------------------------------------------
| O(n^2)        | Double nested loop                                               |
------------------------------------------------------------------------------------
| O(n^3)        | Triple nested loop                                               |
------------------------------------------------------------------------------------

*/

// check the uniqueness of an array elements. 
// Returns a boolean.
// This algorithm is linear O(n). Time complexity increases as the number of element increases.
// There is also a trade-off of space complexity here, as we have to store some temporary data
const isUnique = (array) => {
    const breadCrumbs = {}; // temporary holder for each element
    let result = true;

    for (let index = 0; index < array.length; index++) {
        // check if the elment already exist
        if (breadCrumbs[array[index]]) {
            // if yes, then the array isn't unique
            result = false;
        } else {
            // Make the array value our key (property) and its value true(if it doesn't exist)
            breadCrumbs[array[index]] = true;
        }
    }
    return result;
}

// Test code
// const test = [3, 5, 5,5,10, 29, 1, 1, 3, 5];

// console.log(isUnique(test));  false

 
// Returns an array of only the unique value.
// This algorithm is linear O(n). Time complexity increases as the number of element increases.
// There is also a trade-off of space complexity here, as we have to store some temporary data
const uniqueSort = (array) => {
    const breadCrumbs = {};
    const result = [];
    // Pseudo code
    // 1. check through all element (for loop)
    // 2. if element doesn't exist, store it in breadcrumb, 
        // make the array value our key (property) and its value true
    // 3. then push the value to a temporary data store (call result)
    // 4. if the value already exist, just skip it
    // 5. remove the duplicated element with native sort and return

    for (let index = 0; index < array.length; index++) {
        if (!breadCrumbs[array[index]]) {
            breadCrumbs[array[index]] = true;
            result.push(array[index]); 
        }  
    }

    return result.sort((a, b) => a - b);
}

// Test code
// const test = [3, 5, 5,5,10, 29, 1, 1, 3, 5];

// console.log(uniqueSort(test));  [1,3,5,10,29]

/*
    Linear Search: This algorithm search for a value in an array by checking each value sequentially.
    This algorithm is O(n) time complexity.
    How it works: It loop through each value in the array and return the first value that match the search value
    It takes to parameter; the list/array to search and the value to search for.
*/

function linearSearch(list, item) {
    // loop through the list
    // compare each value to the search item
    // if they are match return ....
    // else return ....
    let index = -1;

    // using For Loop
    // for (listItem in list) {
    //     if (list[listItem] === item) {
    //         index = listItem;
    //     } 
    // }

    // using forEach
    list.forEach((listItem, i) => {
        if (listItem === item) {
            index = i;
        }
    });

    return index;
}


function linearSearchRecursive(list, item) {
    // loop through the list with recursion 
    // by passing a start index 0 and the first element of index 0
    // then subsequently increasing the index by 1 in each recursive call
    // create a base case to check if the whole list item has been checked
    // i.e compare the current index with the length - 1 of the array
    // if the current index is equal to the length - 1 return the set index

    let index = -1;

    function recursion(i, listItem) {
        // console.log('----->', i, listItem);
        if (listItem === item) {
            index = i;
        }

        if (i === list.length - 1) {
            return index;
        } else {
            return recursion(i + 1, list[i + 1]);
        }
    }

    recursion(0, list[0]);
}

// Test code 
// const test = [2,6,7,90,100];

// console.log(linearSearch(test, 90));  // 3

/*
    Binary Search: This algorithm search for a value in a SORTED array by cutting the side of the 
    search area into have. It use the divide and conquer technique. It is only good for a sorted array.
    This algorithm is Logarithmic O(logn) time complexity. 
    How it works: It
*/