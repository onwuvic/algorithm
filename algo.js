// converting loop function to recursive function

function iterativeFactorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

function recursiveFactorial(n) {
    // base case
    if (n === 0) {
        return 1
    }
    // recursive case
    return n * recursiveFactorial(n - 1)
}


// console.log('itFact', iterativeFactorial(4))
// console.log('recFact', recursiveFactorial(4))

function reverseString(str) {
    let reverse = ''
    length = str.length - 1
    while (length >= 0) {
        reverse = reverse + str[length]
        length = length - 1
    }

    return reverse
    
}

function reverseStringR(str) {
    if (str.length === 0) return str
    return reverseStringR(str.slice(1)) + str[0]
}

const m = 'str'

console.log(m.slice(1))

console.log(reverseStringR(m))

function r(n) {
    // base case
    if (n <= 2) {
        return 
    }
    
}
