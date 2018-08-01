/* exported stores */

var stores = [
    {
        name: 'Pike Place Market',
        key: 'pike',
        minCust: 23,
        maxCust: 65,
        perSale: 6.3,
    },
    {
        name: 'SeaTac Airport',
        key: 'seatac',
        minCust: 3,
        maxCust: 24,
        perSale: 1.2,
    }, 
    {
        name: 'Seattle Center',
        key: 'seattlecenter',
        minCust: 11,
        maxCust: 38,
        perSale: 3.7,
    },
    {
        name: 'Capitol Hill',
        key: 'caphill',
        minCust: 20,
        maxCust: 38,
        perSale: 2.3,
    },
    {
        name: 'Alki',
        key: 'alki',
        minCust: 2,
        maxCust: 16,
        perSale: 4.6,
    },
];

function addHRArray(storeArray) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomHRs(min, max) {
        max = Math.floor(max);
        min = Math.ceil(min);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    for(var i = 0; i < storeArray.length; i++){
     
        var hourArray = [];
        for(var hr = 0; hr < 14; hr++){
            hourArray.push(
                getRandomHRs(storeArray[i]['minCust'], storeArray[i]['maxCust'])
            );
        }
        storeArray[i]['perHour'] = hourArray;

    }
}

addHRArray(stores);




