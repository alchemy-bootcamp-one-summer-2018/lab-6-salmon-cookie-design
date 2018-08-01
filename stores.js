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
        console.log('cust per hour array:', randomHoursArray);
        console.log('cookie sales per hour:', cookieSalesArray);
    }
        
    console.log('stores array:', stores);
    module.stores = stores;

    module.stores = stores;
    
    var totals = [];
    for(let i = 0; i < 14; i++) {
        var total = 0;

        for(let j = 0; j < stores.length; j++) {
            total += stores[j].cookiesSalesPerStore[i];
        }

        totals.push(total);
    }

    var grandTotal = totally(totals);

    function totally(totals) {
        var grandTotal = 0;
        for(var j = 0; j < 14; j++) {
            grandTotal += totals[j];
        } 
        return grandTotal;
    }

    var storeTotals = horizontalTotals(stores);
    function horizontalTotals(stores) {
        var storeTotals = 0;
        
        for(var j = 0; j < stores.length; j++) {
            stores[j].dailyStoreTotal = 0;

            var salesPerStorePerHourArray = stores[j].cookiesSalesPerStore;
            console.log('Store Total Array:', salesPerStorePerHourArray);

            for(var i = 0; i < 14; i++) {
                stores[j].dailyStoreTotal += salesPerStorePerHourArray[i];

            }

            storeTotals = storeTotals + stores[j].cookiesSalesPerStore[j];
            console.log('daily store totals:', stores[j].dailyStoreTotal);

        }

    }
    
    module.totals = {
        name: 'Totals',
        cookieSalesPerHourTotal: totals,
        totalHourTotals: grandTotal
    };
    console.log(module.totals);


})(window.module = window.module || {});
