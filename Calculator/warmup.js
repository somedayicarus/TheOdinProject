var my_max = function(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        console.log(max);
    }
};

var vowel_count = function(str) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if('aouiey'.search(str[i]) > -1 ){
           count++;
           }
    }
    return count;
};


var reverse = function(str) {
    var rev = '';
    for(var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
};