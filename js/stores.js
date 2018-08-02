'use strict';

(function(module) {

    let stores = [{
        name: 'Pike Place Market',
        minCustomers: 10,
        maxCustomers: 40,
        avgSale: 5,
    }, {
        name: 'SeaTac Airport',
        minCustomers: 7,
        maxCustomers: 53,
        avgSale: 7,
    }, {
        name: 'Seattle Center',
        minCustomers: 8,
        maxCustomers: 25,
        avgSale: 4,
    }, {
        name: 'Capitol Hill',
        minCustomers: 12,
        maxCustomers: 44,
        avgSale: 6,
    }, {
        name: 'Alki',
        minCustomers: 14,
        maxCustomers: 39,
        avgSale: 8,
    }];
    
    function addStore(store) {
        stores.push(store);
    }
    //computes each hour of sales
    for(let i = 0; i < stores.length; i++){
        stores[i].hours = [];
        stores[i].cookiesSoldPerHour = [];
        for(let h = 0; h < 14; h++){
            let customersPerHour = customerCount(stores[i].minCustomers, stores[i].maxCustomers);
            stores[i].hours.push(customersPerHour);
            let cookiesPerHour = customersPerHour * stores[i].avgSale;
            stores[i].cookiesSoldPerHour.push(cookiesPerHour);
        }
    }

    let totals = [];
    
    //computes horizontal store totals
    for(let i = 0; i < stores.length; i++){ 
        stores[i].storeTotals = [];
        let storeTotal = totally(stores[i].cookiesSoldPerHour);
        stores[i].storeTotals.push(storeTotal);
    }
    //get hour by hour totals
    for(let i = 0; i < 14; i++){
        let total = 0;
        for(let h = 0; h < stores.length; h++){
            total += stores[h].cookiesSoldPerHour[i];
        }
        totals.push(total);
    }
    
    function totally(totals) {
        let grandTotal = 0;
        for(let j = 0; j < 14; j++) {
            grandTotal += totals[j];
        } 
        return grandTotal;
    }
    let grandTotal = totally(totals);
    
    function customerCount(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    module.addStore = addStore;
    module.stores = stores;
    
    module.totals = {
        name: 'TOTALS',
        cookiesSoldPerHour: totals,
        storeTotals: grandTotal
    };

})(window.module = window.module || {});