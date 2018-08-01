/* globals stores */


var totals = {
    name: 'Totals',
    hours: [],
};


function calcTotals(totalsObj, storesObj) {
    for(var i = 0; i < 14; i++) {
        var columnTotal = 0;
        for(var j = 0; j < storesObj.length; j++) {
            columnTotal += storesObj[j]['perHour'][i];
        }
        totalsObj['hours'][i] = columnTotal;
    }
}

calcTotals(totals, stores);


