/* globals stores */


var totals = {
    name: 'Totals',
    hours: [],
};


function cookiesByHourTotals(storeArray, totalsObj, key) {
    for(var i = 0; i < 14; i++) {
        var columnTotal = 0;
        for(var j = 0; j < storeArray.length; j++) {
            columnTotal += storeArray[j]['cookiesByHour'][i];
        }
        totalsObj[key][i] = columnTotal;
    }

    // this should be a separate function called cookiesPerDayTotals
    var rowSum = 0;

    for(var hr = 0; hr < 14; hr++) {
        rowSum += totalsObj[key][hr];
    }
    totalsObj[key].push(rowSum);
    
}

cookiesByHourTotals(stores, totals, 'hours');


