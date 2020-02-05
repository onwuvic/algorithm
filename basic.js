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


*/ 