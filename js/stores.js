'use strict';

(function(module) {

    var stores = [{
        name: 'Pike Place Market',
        minCustomers: 10,
        maxCustomers: 40,
        avgSale: 5.2,
        totalCookies: customerCount(10, 40) * 5.2 

    }, {
        name: 'SeaTac Airport',
        minCustomers: 7,
        maxCustomers: 53,
        avgSale: 7.3,
        totalCookies: customerCount(7, 53) * 7.3
    }, {
        name: 'Seattle Center',
        minCustomers: 8,
        maxCustomers: 25,
        avgSale: 4.4,
        totalCookies: customerCount(8, 25) * 4.4
    }, {
        name: 'Capitol Hill',
        minCustomers: 12,
        maxCustomers: 44,
        avgSale: 5.9,
        totalCookies: customerCount(12, 44) * 5.9
    }, {
        name: 'Alki',
        minCustomers: 14,
        maxCustomers: 39,
        avgSale: 7.9,
        totalCookies: customerCount(14, 39) * 7.9
    }];
    //Loop thru stores and add an hours property that is an array of values
    // (cookies sold) for each hour
    // for(var i = 0; i < stores.length; i++){
        //Loop for the number of hours stores are open
        //for(var h = 0; h < 
        // Use a random function to produce a number of customers that is
        // between the min and max for each store
            
    function customerCount(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    stores[3].hours = [5, 6, 8, 10];
    // Multiple the customers number by the average cookies purchased 
    // per customer

    
    module.stores = stores;


})(window.module = window.module || {});