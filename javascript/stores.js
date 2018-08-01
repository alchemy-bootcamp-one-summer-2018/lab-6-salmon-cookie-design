/* exported stores */

var stores = [
    {
        name: 'Pike Place Market',
        key: 'pike',
        custPerHourMin: 23,
        custPerHourMax: 65,
        cookiesPerCust: 6.3,
    },
    {
        name: 'SeaTac Airport',
        key: 'seatac',
        custPerHourMin: 3,
        custPerHourMax: 24,
        cookiesPerCust: 1.2,
    }, 
    {
        name: 'Seattle Center',
        key: 'seattlecenter',
        custPerHourMin: 11,
        custPerHourMax: 38,
        cookiesPerCust: 3.7,
    },
    {
        name: 'Capitol Hill',
        key: 'caphill',
        custPerHourMin: 20,
        custPerHourMax: 38,
        cookiesPerCust: 2.3,
    },
    {
        name: 'Alki',
        key: 'alki',
        custPerHourMin: 2,
        custPerHourMax: 16,
        cookiesPerCust: 4.6,
    },
];

function custByHour(storeArray) {

    function getRandomHRs(min, max) {
        max = Math.floor(max);
        min = Math.ceil(min);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    for(var i = 0; i < storeArray.length; i++){
     
        var hourArray = [];
        for(var hr = 0; hr < 14; hr++){
            hourArray.push(getRandomHRs(storeArray[i]['custPerHourMin'], storeArray[i]['custPerHourMax']));
        }
        storeArray[i]['custByHour'] = hourArray;

    }
}

function custPerDay(storeArray) {

    for(var i = 0; i < storeArray.length; i++) {
        var rowSum = 0;
        for(var hr = 0; hr < 14; hr++) {
            rowSum += storeArray[i]['custByHour'][hr];
        }
        storeArray[i]['custPerDay'] = rowSum;
    }
}


custByHour(stores);
custPerDay(stores);





