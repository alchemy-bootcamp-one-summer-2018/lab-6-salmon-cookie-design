/* exports sSOMETHING */

(function(module) {
    
    var stores = [{
        name: 'Pike Place Market',
        key: 'pike',
        minCust: 23,
        maxCust: 65,
        avgCookies: 6.3
    }, {
        name: 'SeaTac Airport',
        key: 'seatac',
        minCust: 3,
        maxCust: 24,
        avgCookies: 1.2
    }, {
        name: 'Seattle Center',
        key: 'seattlecenter',
        minCust: 11,
        maxCust: 38,
        avgCookies: 3.7
    }, {
        name: 'Capitol Hill',
        key: 'caphill',
        minCust: 20,
        maxCust: 38,
        avgCookies: 2.3
    }, {
        name: 'Alki',
        key: 'alki',
        minCust: 2,
        maxCust: 16,
        avgCookies: 4.6
    }];

    // var numCust = Math.floor((Math.random() * stores.arrayPosition[i].minCust) + stores.arrayPosition[i].maxCust);

    // stores[0].hours = [];
    // var hours = Math.floor(Math.random() * (65 - 23)) + 23;
    // console.log('random hours', hours);

    //        var hours = Math.floor(Math.random() * (stores[i].maxCust - stores[i].minCust)) + stores[i].minCust;
    
    //var storeOneCustPerHour = [];

    // module.stores = stores;

    //build another four loop to loop through all the stores

    var singleStoreHoursArray = [];

    for(var i = 0; i < 14; i++) {
        stores[0].hours = [];
        var hours = Math.floor(Math.random() * (stores[0].maxCust - stores[0].minCust)) + stores[0].minCust;
        console.log('random cust per hours', hours);
        // var custPerHourArr = [hours];
        singleStoreHoursArray.push(hours);
        console.log('cust per hour array', singleStoreHoursArray);
    }

    module.stores = stores;


})(window.module = window.module || {});