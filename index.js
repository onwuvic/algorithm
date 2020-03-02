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
    Search Algorithms:
    - Linear Search O(n)
    - Binary Search O(logn)

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
// const test = [200,61,700,500,90,1,5,9,100];

// console.log(linearSearch(test, 90));  // 4

/*
    Binary Search: This algorithm search for a value in a SORTED array by cutting the side of the 
    search area into have. It use the divide and conquer technique. It is only good for a sorted array.
    This algorithm is Logarithmic O(logn) time complexity. 
    How it works: It
*/
function binarySearch(list, item) {
    // psuedo
    // create a min index initial it to 0
    // create a max index initial it to the last index of the list
    // create a median index
    // loop through while the min index is less or equal to the max index
    // find the median index by dividing the sum of min & max index by 2
    // if the item is equal to the median index value on the list return the index
    // else, 
        // if the median index value on the list (9) is less than the item (20), 
            // this means our search value is towards the right. 
            // update the min index to be the current median index + 1
        // else, if the median index value on the list (20) is less than the item (9),
            // this means our search value is towards the left.
            // update the max index to be the current median index - 1
    // then continue the loop until min index is equal the max index.

    let minIndex = 0; // start of the list index
    let maxIndex = list.length - 1; // end of the list index
    let medianIndex; // the middle index variable declaration

    // While the start(index) is less or equal to end(index)
    while (minIndex <= maxIndex) {
        // divide the sum of start and end index = the middle index
        // i.e 0 + 4 = 4/2 = 2
        medianIndex = Math.floor((minIndex + maxIndex)/2);
       
        // if the value in the middle index is equal to the item
        if (list[medianIndex] === item) {
            // return the middle index
            return medianIndex;
        } else {
            // Time to move from left or right
            if (list[medianIndex] < item) {
                // if the value in the middle index is less than the item
                // i.e 9 (middle value) < 20 (search value)
                // go right then
                // let reset Start index
                // add one to the current index e.g 2 + 1 = 3
                // min = 3, max = 4
                minIndex = medianIndex + 1;
            } else {
                // if the value in the middle is greater than the item
                // i.e 20 (middle value) > 9 (search value)
                // go left then
                // let reset the End index
                // substract one from End index e.g 4 - 1 = 3
                // min = 0, max = 3
                maxIndex = medianIndex - 1;
            }
        }
    }
    // when Item isn't on the list return -1
    return -1;
}

// Test code 
// const test = [2,6,7,90,100];

// console.log(binarySearch(test, 90));  // 3

/*
    Sorting Algorithm:
    1. Naive Sort - keep looping through the comparing values until the list is sorted. 
                    They are quadratic. O(n^2)
        - Bubble Sort
        - Insertion Sort
        - Selection Sort

    2. Divide & Conquer Sorts - recursively divide the lists and sort small part of the list
        until the entire list is sorted.
        - Mergesort
        - Quicksort

        A. Bubble Sort: This loop through an array compare adjacent indices and swap the greater 
                        value to the end
                        e.g [6, 2, 4, 3, 7]
                        [(2), (6), 4, 3, 7] [2, (4), (6), 8, 7] [2, 4, (6), (8), 7] [2, 4, 6, (7), (8)]

        B. Insertion Sort: This loop through an array list the smallest and add it to a new array.
        
        C. Mergesort: Divide the list into half every time till only one value then compare each node to self. 
                     It is O(nlogn)
*/ 
// helper function
function swap(list, firstIndex, secondIndex) {
    let temp = list[firstIndex]; // greater value
    list[firstIndex] = list[secondIndex]; // put the smaller value to the first position(index)
    list[secondIndex] = temp; // then move the greater value to the second position(index)
};

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Bubble Sort 
function bubbleSort(list) {
    let swapped;
    do {
        // set swapped false
        swapped = false;
        for (let index = 0; index < list.length; index++) {
            // loop through all elements
            if (list[index] && list[index + 1] && list[index] > list[index + 1]) {
                // if there is element i and i+1
                // if i value is greater than i+1 value
                // i>i+1
                // call swap
                swap(list, index, index + 1)

                // set swapped to true
                // if it get here 
                // call the while again to do
                swapped = true;
            }        
        }
    } while (swapped);

    // return the sorted list
    return list;
}

// TEST CODE
// const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrayReserved = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// console.log(bubbleSort(arrayRandom));

// MergeSort
function mergeSort(list) {
    // basic: split the array into halves and merge them recursively
    // Psuedo code
    /*
        - initialize n to the length of the list
        - recursive base case: if n < 2, just return
        - initialize mid to n/2
        - left: left slice of array to mid -1
        - right: right slice of array mid to n-1
        mergeSort(left)
        mergeSort(right)
        merge(left, right)
    */

    // our base case
    if (list.length === 1) {
        // return once we hit an array with a single item
        return list;
    }

    // get the middle value (index) of the list
    const mid = Math.floor(list.length / 2);

    // get items on the left
    const left = list.slice(0, mid);
    // get items on the right
    const right = list.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

}

// TEST CODE

// const arrayReserved = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(mergeSort(arrayReserved));

/*
    Greedy Algorithm is taking the best immediate optimize solution which might not necessarily be the best solution when looking at the big picture. 
    In order words, it doesn't look at the big picture optimized solution but rather the immediate optimize solution.
    This algorithm is suited for large data set where it is not optimal to look at the big picture optimized solution. 
    For instance, given these routes to move from point A to G.

    Route One
    A ---> C is 3
    C ---> B is 4
    B ---> E is 2
    E ---> F is 3
    F ---> G is 4
    Total Miles = 16

    Route Two
    A ---> B  is 5
    B ---> E  is 2
    E ---> G  is 5
    Total Miles = 12

    Greedy Algorithm will pick Route One because from the immediate/starting/initial point to the next point 
    route one has the best option A ---> C is 3 which is better than A ---> B which is 5. 
    But in the long run, we'll see that route two is better.

    Question: You are a banker in Monopoly with your family who has lost many of the game pieces
            so you only have bills in these denominations: $5, $10, $25

            You need only pay out your family in the least number of bills possible so you don't run out before the game is over.
            Write a function that calculate the least number of bills required for any given dollar amount that is divisible by 5.

            Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount
            where the amount is divisible by 5
*/ 

function makeChange(coins, amount) {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
}

// Test code
// console.log(makeChange([5, 10, 25], 50)) // right
console.log(makeChange([1, 6, 10], 12)) // wrong

// You can go wrong with greedy algorithm.

// Instead of using greedy algorithm, Brute force is better where greedy algorithm fails

// Brute force consider all cases and pick the optimise case
// Brute force implementation of makeChange
function makeChange2(value) {
    if (value === 0) {
        return 0;
    }
    let minCoins;
    coins.forEach((coin) => {
        if (value - coin >= 0) {
            let currMinCoins = makeChange2(value - coin);
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    })
    return minCoins + 1;
}