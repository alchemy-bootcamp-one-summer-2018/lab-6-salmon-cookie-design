/* eslint-disable */


// This is what I should've done to start the lab...


var tableCalc = {
    sumRow: function() {
        //sum the row
    },
    sumCol: function() {
        //sum the column
    },
    rowMultNum: function() {
        //multiply a row by a number
    },
    cellToRow: function () {
        //add a cell to a row
    },
    cellToCol: function() {
        //add a cell to a column
    },
};

var libCalc = {
    getRandomHRs: function(min, max) {
        max = Math.floor(max);
        min = Math.ceil(min);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    preciseFloats: function() {
        //take a number, use toPrecision (turning it into a string) and then parseFloat to put it back into a number
    }
}