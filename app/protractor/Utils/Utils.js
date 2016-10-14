'use strict'

function Utils() {

}

Utils.prototype.checkIfInAscendingOrder = function (data) {
   var a , b;
    for (var i = 1 ; i < data.length ; i++) {
        a = data[i-1];
        b = data[i];
        if(a > b) {
            return false;
        }
    }
    return true;
}

Utils.prototype.validateString = function (text, regex) {
    return text.match(regex);
}




module.exports = Utils;
