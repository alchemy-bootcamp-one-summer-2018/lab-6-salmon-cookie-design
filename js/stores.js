'use strict';
(function(module) {

    var stores = [{
        name: 'Pikes Place',
        min: '23',
        max: '65',
        average: '6',
        key: 'pike',
        dailyTotal: 0
    }, {
        name: 'SeaTac Airport',
        min: '3',
        max: '24',
        average: '1',
        key: 'seatac',
        dailyTotal: 0
    }, {
        name: 'Seattle Center',
        min: '11',
        max: '38',
        average: '3',
        key: 'seattlecenter',
        dailyTotal: 0
    }, {
        name: 'Capitol Hill',
        min: '20',
        max: '38',
        average: '2',
        key: 'caphill',
        dailyTotal: 0
    }, {
        name: 'Alki',
        min: '2',
        max: '16',
        average: '4',
        key: 'Alki',
        dailyTotal: 0
    }];

    for(var i = 0; i < stores.length; i++) {
        stores[i].hours = [];
        for(var j = 0; j < 15; j++){
            var hoursArray = stores[i].hours;
            var cookiesSoldPerHour = customerPerHour(stores[i].min, stores[i].max) * stores[i].average;
            hoursArray.push(cookiesSoldPerHour);
            console.log(cookiesSoldPerHour);
            stores[i].dailyTotal += cookiesSoldPerHour;
            
        }
    }

    function customerPerHour(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }


    module.stores = stores;
})(window.module = window.module || {});
