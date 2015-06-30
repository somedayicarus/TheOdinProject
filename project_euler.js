var nums = [];
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 | i % 5 == 0) {
        nums.push(i);
    }
}

var total = nums.reduce(function(a, b) {
    return a + b;
});

console.log(total);


var fib = [];
fib[0] = 0;
fib[1] = 1;

for(i = 2; i < 40; i++) {
    fib[i] = fib [i-2] + fib[i-1];
}


var divis = [];
for (var n = 0; n < fib.length; n++) {
    if (n % 2 == 0) {
        divis.push(n);
    }
    console.log(divis);
}