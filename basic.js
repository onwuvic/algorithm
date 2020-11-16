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
Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.

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

What is "this" in JavaScript
----------------------------
This key word refer to an object; the subject context
This refers to the object that invokes the method where this was defined
This refers to the value of the invoking object
Note: in strict mode, this value is undefined in global function, while in ananymous function, they are not bound to any object.
This is not assigned a value until the object invokes the function where "this" is define

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",

    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,
    // "this" will have the value of the person object because the person object will invoke showFullName ()
    showFullName:function () {
        console.log (this.firstName + " " + this.lastName);
    }
}

person.showFullName() // Penelope Barrymore

Where "this" is misunderstood (when "this" is not the value of the invoking object)
1.  When used in a method passed as a callback
    var user = {
        data:[
            {name:"T. Woods", age:37},
            {name:"P. Mickelson", age:43}
        ],
        clickHandler: function (event) {
            var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

            // This line is printing a random person's name and age from the data array
            console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
        }
    }

    $("button").click(user.clickHandler); // Cannot read property '0' of undefined

    Here, the this key word refers to the button object, because button object is the invoking object
    To make this refer to the user object we can use "bind", "call", or "apply"

    $("button").click(user.clickHandler.bind(user)) // T. Woods 37

2.  This inside closure
    It is expected that a closure should have access to the outter function variable, but when "this" is use in a closure it doesn't refer to the 
    outter funtion scope but the window object.

    It is important to take note that closures cannot access the outer function’s this variable by using the this 
    keyword because the this variable is accessible only by the function itself.

    const person = {
        first: 'People',
        last: 'other',
        full: function() {
            function getFull() {
                console.log('2', this.first + ' ' + this.last);
            }
            
            getFull();
        }
    }

    person.full(); // "this" is undefined, it refers to the global window object

    How to fix it

    const person = {
        first: 'People',
        last: 'other',
        full: function() {
            const that = this;
            function getFull() {
                console.log('2', that.first + ' ' + that.last);
            }
            
            getFull();
        }
    }

    person.full(); // "this" is People other, it refers to the person object here

3.  When the "this" method is assigned to a variable
    The "this" is bound to another object, if we assigned the THIS method to a variable

    const person = {
        first: 'People',
        last: 'other',
        full: function() {
            console.log('2', this.first + ' ' + this.last);
        }
    }

    const invoke = person.full;
    invoke() // undefined undefined   this here will refer to another object, in this case the window object

    How to fix this
    We have specifically bind the person object to it
    const invoke = person.full.bind(person);
    invoke() // People other   this here will refer to person object

4.  When borrowing methods
    when borrow a method from another object that has the "this" key word, the "this" will refer to the method
    where the THIS Method was defined.


Understanding apply(), call(), and bind()
-----------------------------------------
They are methods on JavaScript function. JS functions are object under the hood therefore they have methods on them too.

1. Bind: This method help us to explicitly set which object "this" should be bound to when a function or method is invoke.
    Bind is not useful for assigning the THIS method to an object when borrowing a method, use apply() or call() instead.
    Because using bind when borrowing method might override the method if it exist on object you are trying to bind the method to

2. Call: This method help us to explicitly set which object "this" should be bound to when a function or method is invoke.
    var avgScore = "global avgScore";

    function avg(arrayOfScores) {
        // Add all the scores and return the total
        var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
            return prev + cur;
        });

        // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply
        this.avgScore = sumOfScores / arrayOfScores.length;
    }

    var gameController = {
        scores  :[20, 34, 55, 46, 77],
        avgScore:null
    }

    // If we execute the avg function thus, "this" inside the function is bound to the global window object:
    avg(gameController.scores);

    console.log (window.avgScore); // 46.4
    console.log (gameController.avgScore); // null

    // reset the global avgScore
    avgScore = "global avgScore";

    // To set the "this" value explicitly, so that "this" is bound to the gameController,
    // We use the call () method:
    // it takes the object to point to and the parameter of the object
    avg.call(gameController, gameController.scores);

    console.log(window.avgScore); //global avgScore
    console.log(gameController.avgScore); // 46.4


    Difference between apply and call
    The apply and call methods are almost identical when setting the this value except that you pass the function parameters to apply() as an array, 
    while you have to list the parameters individually to pass them to the call() method.

    Using Apply

    var clientData = {
        id: 094545,
        fullName: "Not Set",
        setUserName: function(firstName, lastName)  {
            // this refers to the fullName property in this object
            this.fullName = firstName + " " + lastName;
        }
    }

    function getUserInput(firstName, lastName, callback, callbackObj) {
        // The use of the Apply method below will set the "this" value to callbackObj
        callback.apply(callbackObj, [firstName, lastName]);
    }

    Borrowing function:
    The most common use for the Apply and Call methods in JavaScript is probably to borrow functions.

    var gameController = {
        scores  :[20, 34, 55, 46, 77],
        avgScore:null,
        players :[
            {name:"Tommy", playerID:987, age:23},
            {name:"Pau", playerID:87, age:33}
        ]
    }

    var appController = {
        scores: [900, 845, 809, 950],
        avgScore: null,
        avg: function () {
            var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
                return prev + cur;
            });

            this.avgScore = sumOfScores / this.scores.length;
        }
    }

    appController.avg.apply(gameController);
    console.log (gameController.avgScore); // 46.4

    // appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
    console.log (appController.avgScore); // null

JavaScript the Hard Part
-------------------------
1. Principles of JavaScript
2. Callbacks & Higher order functions
3. Closure (scope and execution context)
4. Asynchronous JavaScript & the event loop
5. Classes & Prototypes (OOP)
*/ 

