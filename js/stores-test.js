'use strict';

(function(module) {

    var stores = [{
        name: 'Pike Place Market',
        min: '23',
        max: '65',
        avg: '6.3',
        key: 'pike'
    }, {
        name: 'SeaTac Airport',
        min: '3',
        max: '24',
        avg: '1.2',
        key: 'seatac'    
    }, {
        name: 'Seattle Center',
        min: '11',
        max: '38',
        avg: '3.7',
        key: 'seattercenter'    
    }, {
        name: 'Capitol Hill',
        min: '20',
        max: '38',
        avg: '2.3',
        key: 'caphill'    
    }, {
        name: 'Alki',
        min: '2',
        max: '16',
        avg: '4.6',
        key: 'Alki'    
    }];

    
    for(var i = 0; i < stores.length; i++) {
        stores[i].customers = [];
        for(var j = 0; j < 14; j++) {
            var customersThisHour = Math.floor(Math.random() * parseInt(stores[i].max));
            stores[i].customers.push(customersThisHour);
        }
    }

    for(var i = 0; i < stores.length; i++) {
        stores[i].macaronsPerHour = [];
        for(var j = 0; j < 14; j++) {
            var macaronsThisHour = (parseFloat(stores[i].customers[j])) * (parseFloat(stores[i].avg));
            stores[i].macaronsPerHour.push(macaronsThisHour);
        }
    }

    module.stores = stores;

})(window.module = window.module || {});

console.log('module working', module.stores);