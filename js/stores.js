'use strict';

(function(module) {

    let stores = [{
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


    let randomHoursArray = [];
    let cookieSalesArray = [];

    for(let j = 0; j < stores.length; j++) {
        stores[j].cookiesSalesPerHour = [];
        for(let i = 0; i < 14; i++) {
            let custPerHour = Math.floor(Math.random() * (stores[j].maxCust - stores[j].minCust)) + stores[j].minCust;
            let cookieSales = custPerHour * stores[j].avgCookies;
            //console.log('cookie sales:', cookieSales);
            randomHoursArray.push(custPerHour);
            cookieSalesArray.push(cookieSales);
            stores[j].cookiesSalesPerHour.push(cookieSales);

        } 
    }
    console.log('stores array:', stores);

    
    // let storeTotal = [];
    // for(let i = 0; i < 14; i++) {
    //     let total = 0;
    //     total += stores[i].cookiesSalesPerHour[i];
    //     storeTotal.push(total);
    // }
    // console.log('store total', storeTotal);
        
    let totalCookiesPerHour = [];
    for(let i = 0; i < 14; i++) {
        let total = 0;
        for(let j = 0; j < stores.length; j++) {
            total += stores[j].cookiesSalesPerHour[i];
        }
        totalCookiesPerHour.push(total);
    }

    for(let i = 0; i < stores.length; i++) {
        stores[i].storeTotals = [];
        let storeTotal = totally(stores[i].cookiesSalesPerHour);
        stores[i].storeTotals.push(storeTotal);
        console.log('store totals', stores[i].storeTotals);
    }
    
    let grandTotal = totally(totalCookiesPerHour);
    
    let totalsPerHour = {
        name: 'Hourly Totals',
        cookiesSalesPerHour: totalCookiesPerHour,
        storeTotals: grandTotal
    };
    
    console.log(totalsPerHour);

    module.stores = stores;
    module.totalsPerHour = totalsPerHour;
    
    console.log('grand total', grandTotal);
    function totally(totals) {
        let grandTotal = 0;
        for(let j = 0; j < 14; j++) {
            grandTotal += totals[j];
        }
        return grandTotal;
    }

})(window.module = window.module || {});