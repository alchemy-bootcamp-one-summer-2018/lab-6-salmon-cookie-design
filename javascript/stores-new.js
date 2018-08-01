'use strict';

(function(module) {

     var stores = [
        {
            name: 'Pike Place Market',
            key: 'pike',
            custPerHourMin: 23,
            custPerHourMax: 65,
            cookiesPerCust: 6.3,
        },
        {
            name: 'SeaTac Airport',
            key: 'seatac',
            custPerHourMin: 3,
            custPerHourMax: 24,
            cookiesPerCust: 1.2,
        },
        {
            name: 'Seattle Center',
            key: 'seattlecenter',
            custPerHourMin: 11,
            custPerHourMax: 38,
            cookiesPerCust: 3.7,
        },
        {
            name: 'Capitol Hill',
            key: 'caphill',
            custPerHourMin: 20,
            custPerHourMax: 38,
            cookiesPerCust: 2.3,
        },
        {
            name: 'Alki',
            key: 'alki',
            custPerHourMin: 2,
            custPerHourMax: 16,
            cookiesPerCust: 4.6,
        },
    ];

    // for(var i = 0; i < fruits.length; i++) {
    //     fruits[i].someProperty = 'prop';
    // }

    module.stores = stores;

})(window.module = window.module || {});