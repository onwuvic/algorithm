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
