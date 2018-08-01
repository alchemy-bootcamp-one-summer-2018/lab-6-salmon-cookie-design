/* globals stores */


var totals = {
    name: 'Totals',
    hours: [],
};


function custByHourTotals(storeArray, totalsObj) {
    for(var i = 0; i < 14; i++) {
        var columnTotal = 0;
        for(var j = 0; j < storeArray.length; j++) {
            columnTotal += storeArray[j]['custByHour'][i];
        }
        totalsObj['hours'][i] = columnTotal;
    }
}

custByHourTotals(stores, totals);


