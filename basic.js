/*
BASIC JAVASCRIPT CONCEPT


What is the difference between var, let/const
-----------------------------------------------

The major different is block scope. JavaScript var only has global and function scope.
fun() {
    var x = 'x variable';

    if(true) {
        // block scope
        var y = 'y variable';
    }

    fun2() {
        console.log(x, y);
    }

    fun2(); // 'x variable y variable'
}

JavaScript Engine interpret this as:
This is called Hoisting

fun() {
    // variable declaration
    var x;
    var y;

    // function declaration not invocation
    fun2() {
        console.log(x, y);
    }

    // variable are assign where you assigned them on your code
    x = 'x variable';

    // if has block scope, js doesn't know block scope with var
    if(true) {
        // variable are assign where you assigned them on your code
        y = 'y variable';
    }

    // this should have been a reference error but js doesn't have block scope with "var"
    // it is treated as global variable or the parent scope of the block scope.
    fun2(); // x variable y variable
}

Up until ES2015 JavaScript doesn't traditionally have block scope. This is what "let"/"const"
Solve.

fun() {
    let x = 'x variable';

    if(true) {
        // block scope
        let y = 'y variable';
    }

    fun2() {
        console.log(x, y);
    }

    fun2(); // reference error for y. This is because fun2 doesn't have access to if(){} block scope.
}


What is memoization
--------------------
Memoization is caching the value a function returns

e.g

const cache = {};

func(n) {
    const innerFunc(n) {
        return n*10;
    }

    if(n in cache) {
        return cache[n];
    } else {
        // This process is memoization
        // when get the result of the function, then cache it for later usage.
        const result = innerFunc(n);
        cache[n] = result;
        return result
    }
}


What is closure in JavaScript
------------------------------
Closure is an inner function that has access to the outer function variable scope and parameters.
Closure has access to the outter function scope and global scope.

func(name) {
    const greetings = 'Hi';

    // This is closure right here
    // this inner function have access to the outter function variable greetings.
    welcome() {
        return `${greetings} ${name}`;
    }

    return welcome;
}

Note 1: Closure still have access to the outter function scope even after the outter function has been called.
e.g
// here, the outter fuction has been called and it has returned (it returned the inner function).
const innerFunc = func('victor');
innerFunc(); // Hi Victor

Wait what? yeah!!!
The outter function returned the inner function and assigned it to variable innerFunc
But by the time we called innerFunc later, it still has access to greetings variable, name parameter

Note 2: Closure store reference to the outter function variable not its actual value.
So, even when the outter function variable has been changed before the closure is called

e.g
messages(name) {
    let greetings = 'Hi';

    // This is closure right here
    // this inner function have access to the outter function variable greetings.
    return {
        genericGreeting: (word) => {
            greetings = word;
        },
        welcomeMessage: () => {
            return `${greetings} ${name}`;
        }
    }
}

// called outter function
const greet = messages('Victor');
greeting.welcomeMessage(); // Hi Victor

// change outter function variable value
greeting.genericGreeting('How are you');

// call closure again
greeting.welcomeMessage(); // How are you Victor


Converting the memoization code into a closure
-----------------------------------------------
function func() {
    // this is now private to the entire scope
    const cache = {};

    function innerFunc(n) {
        return n * 10;
    }

    // closure
    function memoize (n) {
        if(n in cache) {
            return cache[n];
        } else {
            // This process is memoization
            // when get the result of the function, then cache it for later usage.
            const result = innerFunc(n);
            cache[n] = result;
            return result;
        }
    }

    return memoize;
}
*/ 

