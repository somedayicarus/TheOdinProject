var result = document.getElementById("screen");
var inputs = ["", "", ""];
var values = [];


// math functions
var add = function(a, b) {return a + b;};
var multiply = function(a, b) {return a * b;};
var subtract = function(a, b) {return a - b;};
var divide = function(a, b) {
    if(b === 0) {
        return NaN;
    }
    else {
        return a / b;
    }
};

var equals = function() {
    if (inputs[1] === "+") {
        var sum = add(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clear();
        values.push(sum);
    }
    else if(inputs[1] === "-") {
        var difference = subtract(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clear();
        values.push(difference);
    }
    else if(inputs[1] === "*") {
        var product = multiply(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clear();
        values.push(product);
    }
    else if(inputs[1] === "%") {
        var quotient = divide(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clear();
        values.push(quotient);
    }
    display();
};

 //store and update numbers

var update = function(values) {
    inputs.push(values);
    inputs.shift();
}

var clear = function() {
    inputs = [];
    values = [];
    display();
}

var display = function() {
    result.innerHTML = inputs.join(" ") + " " + values.join("");
}

// event click listeners
for(var i = 0; i < 10; i++) {
    var n = i.toString();
    document.getElementById(n).addEventListener('click', function() {
        values.push(this.innerHTML);
        display();
    });
}


//NOT DRY - fix

document.getElementById("point").addEventListener('click', function() {
    values.push(this.innerHTML);
    display();
});

document.getElementById("plus").addEventListener('click', function() {
    update(values.join(""));
    update(this.innerHTML);
    values = [];
    display();
});
                                                 
document.getElementById("div").addEventListener('click', function() {
    update(values.join(""));
    update(this.innerHTML);
    values = [];
    display();
});
                                                                                                  
document.getElementById("minus").addEventListener('click', function() {
    update(values.join(""));
    update(this.innerHTML);
    values = [];
    display();
});

                                                 
document.getElementById("mult").addEventListener('click', function() {
    update(values.join(""));
    update(this.innerHTML);
    values = [];
    display();
});
                                                
document.getElementById("equal").addEventListener('click', function() {
    update(values.join(""));
    values = [];
    equals();
});
document.getElementById("clear").addEventListener('click', function() {
    clear();
});

