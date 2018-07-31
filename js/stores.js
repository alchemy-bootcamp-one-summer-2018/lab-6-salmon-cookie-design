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
    
    for(var i = 0; i < stores.length; i++){
        stores[i].hours = [];
        stores[i].cookiesSold = [];
        for(var h = 0; h < 14; h++){
            var customersPerHour = customerCount(stores[i].minCustomers, stores[i].maxCustomers);
            stores[i].hours.push(customersPerHour);
            var cookiesPerHour = customersPerHour * stores[i].avgSale;
            stores[i].cookiesSold.push(cookiesPerHour);
        }
    }
      
    function customerCount(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
   
    module.stores = stores;

})(window.module = window.module || {});