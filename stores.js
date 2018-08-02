
'use strict';
(function(module) {



    let stores = [{
        location: 'Pike Place Market',
        min: 23,
        max: 65,
        avg: 6,
        key: 'pike',
        dailyTotal:0
    }, {
        location: 'SeaTac Airport',
        min: 3,
        max: 24,
        avg: 6,
        key: 'seatac',
        dailyTotal:0   
    }, { 
        location: 'Seattle Center',
        min: 11,
        max: 38,
        avg: 2,
        key: 'seattlecenter',
        dailyTotal:0
    }, {
        location: 'Capitol Hill',
        min: 20,
        max: 38,
        avg: 2, 
        key: 'caphill',
        dailyTotal:0
    }, {
        location: 'Alki',
        min: 2,
        max: 16,
        avg: 5,
        key: 'alki',
        dailyTotal:0
    }];

    for(let i = 0; i < stores.length; i++) {
        stores[i].hours = []; 
        for(let j = 0; j < 15; j++) {
            let hoursArray = stores[i].hours; 
            let cookiesSoldHour = customerPerHour(stores[i].min, stores[i].max) * stores[i].avg;
            hoursArray.push(cookiesSoldHour);
            stores[i].dailyTotal += cookiesSoldHour; }      
          
    }

    function customerPerHour(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    } 

    module.stores = stores;

    console.log (stores);
})(window.module = window.module || {});

