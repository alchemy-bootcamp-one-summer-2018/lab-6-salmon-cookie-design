'use strict';

(function(module) {

    var stores = [{
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
    
    for(let i = 0; i < stores.length; i++){
        stores[i].hours = [];
        stores[i].cookiesSoldPerHour = [];
        for(let h = 0; h < 14; h++){
            var customersPerHour = customerCount(stores[i].minCustomers, stores[i].maxCustomers);
            stores[i].hours.push(customersPerHour);
            var cookiesPerHour = customersPerHour * stores[i].avgSale;
            stores[i].cookiesSoldPerHour.push(cookiesPerHour);
        }
    }

    var totals = [];

    for(let i = 0; i < stores.length; i++){ 
        stores[i].storeTotals = [];
        var storeTotal = totally(stores[i].cookiesSoldPerHour);
        stores[i].storeTotals.push(storeTotal);
    }
    
    function totally(totals) {
        var grandTotal = 0;
        for(var j = 0; j < 14; j++) {
            grandTotal += totals[j];
        } 
        return grandTotal;
    }
    
    function customerCount(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
   
    module.stores = stores;

})(window.module = window.module || {});