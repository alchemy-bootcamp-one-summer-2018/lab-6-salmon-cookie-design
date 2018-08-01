'use strict';

(function(module) {

    var stores = [{
        name: 'Pike Place Market',
        minCust: 23,
        maxCust: 65,
        avgCookies: 6
    }, {
        name: 'SeaTac Airport',
        minCust: 3,
        maxCust: 24,
        avgCookies: 1
    }, {
        name: 'Seattle Center',
        minCust: 11,
        maxCust: 38,
        avgCookies: 4
    }, {
        name: 'Capitol Hill',
        minCust: 20,
        maxCust: 38,
        avgCookies: 2
    }, {
        name: 'Alki',
        minCust: 2,
        maxCust: 16,
        avgCookies: 5
    }];


        var randomHoursArray = [];
        var cookieSalesArray = [];

        for(var j = 0; j < stores.length; j++) {
            stores[j].cookiesSalesPerStore = [];
            for(var i = 0; i < 14; i++) {
                var custPerHour = Math.floor(Math.random() * (stores[j].maxCust - stores[j].minCust)) + stores[j].minCust;
                var cookieSales = custPerHour * stores[j].avgCookies;
                //console.log('cookie sales:', cookieSales);
                randomHoursArray.push(custPerHour);
                cookieSalesArray.push(cookieSales);
                stores[j].cookiesSalesPerStore.push(cookieSales);

            } 
            console.log("cust per hour array:", randomHoursArray);
            console.log("cookie sales per hour:", cookieSalesArray);
        }
        
        console.log('stores array:', stores);
        
        module.stores = stores;
        
})(window.module = window.module || {});