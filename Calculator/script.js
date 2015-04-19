var result = document.getElementById("screen");
var inputs = ["", "", ""];
var chosenNum = [];


//basic math functions
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
        chosenNum.push(sum);
    }
    else if(inputs[1] === "-") {
        var difference = subtract(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clear();
        chosenNum.push(difference);
    }
    else if(inputs[1] === "*") {
        var product = multiply(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clear();
        chosenNum.push(product);
    }
    else if(inputs[1] === "%") {
        var quotient = divide(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clear();
        chosenNum.push(quotient);
    }
    display();
};

 //log number to choseNumbers array onclick

var update = function(chosenNum) {
    inputs.push(chosenNum);
    inputs.shift();
}

var clear = function() {
    inputs = [];
    chosenNum = [];
    display();
}

var display = function() {
    result.innerHTML = inputs.join(" ") + " " + chosenNum.join("");
}

// event click listeners
for(var i = 0; i < 10; i++) {
    var n = i.toString();
    document.getElementById(n).addEventListener('click', function() {
        chosenNum.push(this.innerHTML);
        display();
    });
}

document.getElementById("point").addEventListener('click', function() {
    chosenNum.push(this.innerHTML);
    display();
});

document.getElementById("plus").addEventListener('click', function() {
    update(chosenNum.join(""));
    update(this.innerHTML);
    chosenNum = [];
    display();
});
                                                 
document.getElementById("div").addEventListener('click', function() {
    update(chosenNum.join(""));
    update(this.innerHTML);
    chosenNum = [];
    display();
});
                                                                                                  
document.getElementById("minus").addEventListener('click', function() {
    update(chosenNum.join(""));
    update(this.innerHTML);
    chosenNum = [];
    display();
});

                                                 
document.getElementById("mult").addEventListener('click', function() {
    update(chosenNum.join(""));
    update(this.innerHTML);
    chosenNum = [];
    display();
});
                                                
document.getElementById("equal").addEventListener('click', function() {
    update(chosenNum.join(""));
    chosenNum = [];
    equals();
});
document.getElementById("clear").addEventListener('click', function() {
    clear();
});







//hold first number pressed


//hold math function chosen

//run math function when equal button is pressed 



//var logNumber = function(e) {
    //if(e.target !== e.currentTarget) {
        //var clickedItem = e.target.id;
        //console.log(clickedItem);
    //}
    //e.stopPropagation();
//}

//var numPad = document.querySelector("#num_pad");
//numPad.addEventListener("click", logNumber, false);


