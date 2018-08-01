/* export stores */

(function(module) {
    
    var stores = [{
        name: 'Pike Place Market',
        key: 'pike',
        minCust: 23,
        maxCust: 65,
        avgCookies: 6
    }, {
        name: 'SeaTac Airport',
        key: 'seatac',
        minCust: 3,
        maxCust: 24,
        avgCookies: 1
    }, {
        name: 'Seattle Center',
        key: 'seattlecenter',
        minCust: 11,
        maxCust: 38,
        avgCookies: 4
    }, {
        name: 'Capitol Hill',
        key: 'caphill',
        minCust: 20,
        maxCust: 38,
        avgCookies: 2
    }, {
        name: 'Alki',
        key: 'alki',
        minCust: 2,
        maxCust: 16,
        avgCookies: 5
    }];

    var randomHoursArray = [];
    var cookieSalesArray = [];

    for(var j = 0; j < stores.length; j++) {

        stores[j].cookieSalesPerStore = [];

        for(var i = 0; i < 14; i++) {
            var custPerHours = Math.floor(Math.random() * (stores[j].maxCust - stores[j].minCust)) + stores[j].minCust;
            var cookieSales = custPerHours * stores[j].avgCookies;
            console.log('cookie sales:', cookieSales); 
            
            randomHoursArray.push(custPerHours);
            cookieSalesArray.push(cookieSales);
            stores[j].cookieSalesPerStore.push(cookieSales);
        }
    
        console.log('random cust per hour array', randomHoursArray);
        console.log('cookie sales per hour array', cookieSalesArray);

    }

    console.log('stores array:', stores);

    // for(var k = 0; k < 14; k++) {
    //     getElementById.
    // }

    module.stores = stores;


})(window.module = window.module || {});