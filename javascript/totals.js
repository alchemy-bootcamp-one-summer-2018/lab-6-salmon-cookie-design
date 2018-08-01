/* globals stores */


var totals = {
    name: 'Totals',
    hours: [],
};


function cookiesByHourTotals(storeArray, totalsObj) {
    for(var i = 0; i < 14; i++) {
        var columnTotal = 0;
        for(var j = 0; j < storeArray.length; j++) {
            columnTotal += storeArray[j]['cookiesByHour'][i];
        }
        totalsObj['hours'][i] = columnTotal;
    }
}

cookiesByHourTotals(stores, totals);


