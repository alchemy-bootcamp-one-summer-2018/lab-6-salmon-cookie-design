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

    console.log('stores array:::', stores[0].cookieSalesPerStore);
    console.log('stores array:', stores);
    module.stores = stores;

    var totals = [];
    for(let i = 0; i < 14; i++) {
        var total = 0;

        for(let j = 0; j < stores.length; j++) {
            total = total + stores[j].cookieSalesPerStore[i];
        }
        
        totals.push(total);
    }

    var grandTotal = totally(totals);

    function totally(totals) {
        var grandTotal = 0;
        for(var j = 0; j < 14; j++) {
            grandTotal = grandTotal + totals[j];
        } 
        return grandTotal;
    }

    module.totals = {
        name: 'Totals',
        cookieSalesPerStore: totals,
        dailyStoreTotal: grandTotal
    };
    console.log('module.totals:', module.totals);
    
    var storeTotals = horizontalTotals(stores);
    function horizontalTotals(stores) {
        var storeTotals = 0;
        
        for(var j = 0; j < stores.length; j++) {
            stores[j].dailyStoreTotal = 0;
            
            var salesPerHourPerStoreArray = stores[j].cookieSalesPerStore;
            console.log('horizontal array aka salesPerHourPerStoreArray:', salesPerHourPerStoreArray);
            
            for(var i = 0; i < 14; i++) {
                stores[j].dailyStoreTotal += salesPerHourPerStoreArray[i];
            }

            storeTotals = storeTotals + stores[j].cookieSalesPerStore[j];
            console.log('dailyStoreTotal', stores[j].dailyStoreTotal);
            
        } 
        
    }

    console.log('these are store totals', storeTotals);


    console.log(module.totals);


})(window.module = window.module || {});




















// EXAMPLE:

// for(var i = 0; i < stores.length; i++) {
//     stores[i].storeTotals = [];
//     var StoreTotal = totally(stores[i].cookieSalesPerStore);    
//     stores[i].storeTotals.push(store totals);
// }

// module.stores = stores;

// var totals = [];
// for (var i = 0;  i < 14; i++) {
//     var total = 0
//     for(var j; j < stores.length; j++) {
//         total += stores[j].cookieSalesPerStore[i];
// }
// totals.push(total);
// }

// var grandTotal = totally(totals);

// function totally (totals) {
//     var grandTotal = 0;
//     for(var j = 0; j < 14; j++) {
//         grandTotal += totals[j];
//     }
//     return grandTotal;
// }

// module.totals = {
//     name: 'Totals'
//     cookieSalesPerStore: totals,
//     storeTotals: grandTotal
// };
// console.log(module.totals);
