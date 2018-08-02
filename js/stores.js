/* export stores */

(function(module) {
    
    let stores = [{
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

    let randomHoursArray = [];
    let cookieSalesArray = [];

    function addStore(stores) {
        stores.push(stores);
    }
    console.log('new stores added to stores???', stores);
    module.addStore = addStore;


    for(let j = 0; j < stores.length; j++) {

        stores[j].cookieSalesPerStore = [];

        for(let i = 0; i < 14; i++) {
            let custPerHours = Math.floor(Math.random() * (stores[j].maxCust - stores[j].minCust)) + stores[j].minCust;
            let cookieSales = custPerHours * stores[j].avgCookies;
            //console.log('cookie sales:', cookieSales); 
            
            randomHoursArray.push(custPerHours);
            cookieSalesArray.push(cookieSales);
            stores[j].cookieSalesPerStore.push(cookieSales);
        }
    
        //console.log('random cust per hour array', randomHoursArray);
        //console.log('cookie sales per hour array', cookieSalesArray);

    }

    //console.log('stores array:::', stores[0].cookieSalesPerStore);
    console.log('stores array:', stores);
    module.stores = stores;

    let totals = [];
    for(let i = 0; i < 14; i++) {
        let total = 0;

        for(let j = 0; j < stores.length; j++) {
            total = total + stores[j].cookieSalesPerStore[i];
        }
        
        totals.push(total);
    }

    let grandTotal = totally(totals);

    function totally(totals) {
        let grandTotal = 0;
        for(let j = 0; j < 14; j++) {
            grandTotal = grandTotal + totals[j];
        } 
        return grandTotal;
    }

    module.totals = {
        name: 'Totals',
        cookieSalesPerStore: totals,
        dailyStoreTotal: grandTotal
    };
    //console.log('module.totals:', module.totals);
    
    let storeTotals = horizontalTotals(stores);
    function horizontalTotals(stores) {
        let storeTotals = 0;
        
        for(let j = 0; j < stores.length; j++) {
            stores[j].dailyStoreTotal = 0;
            
            let salesPerHourPerStoreArray = stores[j].cookieSalesPerStore;
            //console.log('horizontal array aka salesPerHourPerStoreArray:', salesPerHourPerStoreArray);
            
            for(let i = 0; i < 14; i++) {
                stores[j].dailyStoreTotal += salesPerHourPerStoreArray[i];
            }

            storeTotals = storeTotals + stores[j].cookieSalesPerStore[j];
            //console.log('dailyStoreTotal', stores[j].dailyStoreTotal);
            
        } 
        
    }
    //console.log('these are store totals', storeTotals);


    //console.log(module.totals);


})(window.module = window.module || {});




















// EXAMPLE:

// for(let i = 0; i < stores.length; i++) {
//     stores[i].storeTotals = [];
//     let StoreTotal = totally(stores[i].cookieSalesPerStore);    
//     stores[i].storeTotals.push(store totals);
// }

// module.stores = stores;

// let totals = [];
// for (let i = 0;  i < 14; i++) {
//     let total = 0
//     for(let j; j < stores.length; j++) {
//         total += stores[j].cookieSalesPerStore[i];
// }
// totals.push(total);
// }

// let grandTotal = totally(totals);

// function totally (totals) {
//     let grandTotal = 0;
//     for(let j = 0; j < 14; j++) {
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
