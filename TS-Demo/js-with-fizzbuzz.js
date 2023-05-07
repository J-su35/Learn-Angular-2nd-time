function fizzbuzzwithtype(n) {
    if (n % 3 === 0) {
        return 'fizz';
    }
    if (n % 5 === 0) {
        return 'buzz';
    }
    return '' + n;
}
console.log(fizzbuzzwithtype(1));
console.log(fizzbuzzwithtype(2));
console.log(fizzbuzzwithtype(3));
console.log(fizzbuzzwithtype(4));
console.log(fizzbuzzwithtype(5));
console.log(fizzbuzzwithtype(45));
